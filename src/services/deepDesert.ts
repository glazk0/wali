import { ShardClientUtil, hideLinkEmbed, hyperlink, subtext, unorderedList } from 'discord.js';

import { database } from '#database';
import { keyv } from '#database/cache';
import { Service } from '#models/service';
import type { ItemModel } from '#types/database';
import { api } from '#utils/api';
import { DATABASE_URL, databaseUrl } from '#utils/common';
import { logger } from '#utils/logger';

interface DeepDesertUnique {
  visibleLoot: Array<{
    entity: ItemModel;
    minQuantity: number;
    maxQuantity: number;
    probability: number;
  }>;
  locationHint: string;
  name: string;
  locationType: string;
  tags: string[];
  location: {
    x: number;
    y: number;
    z: number;
  };
  mapMarkers: any[];
}

interface DeepDesertApiResponse {
  uniquesList: DeepDesertUnique[];
  nextCoriolisTime: number | null;
}

export class DeepDesert extends Service {
  private static readonly CACHE_KEY = 'deep-desert:last-coriolis-time';

  private lastCoriolisTime: number | null = null;

  constructor() {
    super({
      name: 'deep-desert',
      enabled: true,
      interval: 1000 * 60 * 60 * 1,
      retryAttempts: 3,
      retryDelay: 10000,
    });
  }

  protected async onStart(): Promise<void> {
    await this.loadLastCoriolisTime();
    logger.info('Deep Desert service started');
    await this.execute();
  }

  protected async onStop(): Promise<void> {
    logger.info('Deep Desert service stopped');
  }

  protected async execute(): Promise<void> {
    try {
      const data = await this.fetchDeepDesertData();

      if (!data) {
        logger.warn('No data received from Deep Desert API');
        return;
      }

      if (!this.isNewCoriolisReset(data)) {
        logger.info('No new Coriolis reset detected');
        return;
      }

      if (!data.nextCoriolisTime) {
        logger.warn('Next Coriolis time is null, skipping broadcast');
        return;
      }

      logger.info(`New Coriolis reset detected at ${new Date(data.nextCoriolisTime * 1000).toISOString()}`);

      this.lastCoriolisTime = data.nextCoriolisTime;

      const uniques = this.getUniques(data.uniquesList);

      let message: string | string[] = [];

      message = [
        `**This Week's Deep Desert Uniques**`,
        '',
        `Next Coriolis Reset: <t:${data.nextCoriolisTime}:F> (<t:${data.nextCoriolisTime}:R>)`,
      ];

      if (uniques.length) {
        message = [
          ...message,
          '',
          unorderedList(
            uniques
              .filter((item) => item.name && item.id)
              .map((item) =>
                hyperlink(item.name!, hideLinkEmbed(`${databaseUrl('en', `${item.mainCategoryId}/${item.id}`)}`))
              )
          ),
          '',
          `To see their locations, drop counts and probabilities, you should consider navigating to the ${hyperlink('Dune Awakening Database', hideLinkEmbed(`${databaseUrl('en', 'deep-desert')}`))}.`,
        ];
      } else {
        message = [...message, '', 'No unique items available this week.'];
      }

      message = [...message, '', subtext('The times are in your local timezone.')];

      message = message.join('\n');

      const settings = await database.query.webhookChannels.findMany({
        where: (webhookChannels, { eq }) => eq(webhookChannels.webhookType, 'DEEP_DESERT'),
      });

      logger.info(`Broadcasting Deep Desert message to ${settings.length} channels`);

      await this.manager?.broadcastEval(
        async (client, { settings, message }) => {
          const shardSettings = settings.filter(
            (s) =>
              ShardClientUtil.shardIdForGuildId(s.guildId, client.options.shardCount as number) === client.shard?.ids[0]
          );

          for (const setting of shardSettings) {
            const channel = client.channels.cache.get(setting.channelId);

            if (!channel || channel.isDMBased() || !channel.isTextBased() || channel.isThread()) {
              console.warn(`Channel ${setting.channelId} is not valid for broadcasting`);
              continue;
            }

            try {
              const webhooks = await channel?.fetchWebhooks();
              const webhook = webhooks.find((w) => w.id === setting.webhookId && w.token === setting.webhookToken);

              if (!webhook) {
                console.warn(`Webhook not found for channel ${setting.channelId}`);
                continue;
              }

              const messages = await channel.messages.fetch({ limit: 100 });
              const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;

              const oldMessages = messages.filter((m) => {
                return m.webhookId === setting.webhookId && m.createdTimestamp > twoWeeksAgo;
              });

              if (oldMessages.size > 0) {
                try {
                  if (oldMessages.size === 1) {
                    await oldMessages.first()?.delete();
                  } else {
                    await channel.bulkDelete(oldMessages);
                  }
                } catch (error) {
                  console.error(`Failed to delete old messages in channel ${setting.channelId}: ${error}`);
                }
              }

              await webhook.send({
                content: message,
              });
            } catch (error) {
              console.error(`Failed to send message to channel ${setting.channelId}: ${error}`);
              continue;
            }
          }
        },
        {
          context: {
            settings,
            message,
          },
        }
      );

      await this.saveLastCoriolisTime(this.lastCoriolisTime);
    } catch (error) {
      logger.error(`Error in Deep Desert execution: ${error}`);
    }
  }

  private async fetchDeepDesertData(): Promise<DeepDesertApiResponse | null> {
    try {
      const data = await api.get<DeepDesertApiResponse>('dd-live-data', 'en');
      return data;
    } catch (error) {
      logger.error(`Failed to fetch Deep Desert data: ${error}`);
      throw error;
    }
  }

  private isNewCoriolisReset(data: DeepDesertApiResponse): boolean {
    return !this.lastCoriolisTime || data.nextCoriolisTime !== this.lastCoriolisTime;
  }

  private getUniques(deepDesertUniques: DeepDesertUnique[]): ItemModel[] {
    const results: Record<string, ItemModel> = {};
    for (const unique of deepDesertUniques) {
      for (const loot of unique.visibleLoot) {
        if (!results[loot.entity.id]) {
          results[loot.entity.id] = loot.entity;
        }
      }
    }
    return Object.values(results).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }

  private async loadLastCoriolisTime(): Promise<void> {
    try {
      const lastCoriolisTime = await keyv.get<number>(DeepDesert.CACHE_KEY);
      this.lastCoriolisTime = lastCoriolisTime || null;
      logger.debug(`Loaded last Coriolis time from cache: ${this.lastCoriolisTime}`);
    } catch (error) {
      logger.error(`Failed to load last Coriolis time from cache: ${error}`);
      this.lastCoriolisTime = null;
    }
  }

  private async saveLastCoriolisTime(time: number | null): Promise<void> {
    try {
      if (time === null) {
        await keyv.delete(DeepDesert.CACHE_KEY);
        logger.debug('Deleted last Coriolis time from cache');
      } else {
        await keyv.set(DeepDesert.CACHE_KEY, time);
        logger.debug(`Saved last Coriolis time to cache: ${time}`);
      }
    } catch (error) {
      logger.error(`Failed to save last Coriolis time to cache: ${error}`);
      throw error;
    }
  }

  public getLastCoriolisTime(): number | null {
    return this.lastCoriolisTime;
  }

  public async setLastCoriolisTime(time: number | null): Promise<void> {
    this.lastCoriolisTime = time;
    await this.saveLastCoriolisTime(time);
  }

  public async clearCache(): Promise<void> {
    try {
      await keyv.delete(DeepDesert.CACHE_KEY);
      this.lastCoriolisTime = null;
      logger.debug('Cleared Deep Desert cache');
    } catch (error) {
      logger.error(`Failed to clear Deep Desert cache: ${error}`);
      throw error;
    }
  }
}

export const deepDesert = new DeepDesert();
