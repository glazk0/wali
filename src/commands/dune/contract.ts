import {
  type APIEmbedField,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  hyperlink,
  unorderedList,
} from 'discord.js';

import { Command, type Context } from '#models/command';
import { Embed } from '#models/embed';
import { type ContractModel } from '#types/database';
import { api } from '#utils/api';
import { DATABASE_URL, databaseUrl, PROXY_URL, truncateArray } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'contract',
      description: 'Returns the details of the specified contract',
      options: [
        {
          name: 'name',
          description: 'Name of the contract',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
      ],
    });
  }

  override async execute(interaction: CommandInteraction, context: Context): Promise<void> {
    if (!interaction.isChatInputCommand()) return;

    if (!interaction.deferred) await interaction.deferReply();

    const name = interaction.options.getString('name', true);

    const data = await api.get<ContractModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The contract "${name}" could not be found.`);
      return;
    }

    const embed = new Embed();

    const actionRow = new ActionRowBuilder<ButtonBuilder>();

    if (data.name) {
      embed.setTitle(data.name);
      embed.setURL(databaseUrl(context.locale, `${data.mainCategoryId}/${data.id}`));
    }

    if (data.description) {
      embed.setDescription(data.description);
    }

    if (data.iconPath) {
      embed.setThumbnail(PROXY_URL + data.iconPath);
    }

    const fields: APIEmbedField[] = [];

    if (data.xpReward) {
      fields.push({
        name: 'XP Reward',
        value: data.xpReward.toLocaleString(context.locale),
      });
    }

    if (data.conditions?.length) {
      if (data.conditions.some((condition) => condition.locations)) {
        actionRow.addComponents(
          new ButtonBuilder({
            label: 'View locations',
            style: ButtonStyle.Link,
            url: databaseUrl(context.locale, `${data.mainCategoryId}/${data.id}`),
          })
        );
      }

      const conditions = data.conditions.map((condition) => {
        if (condition.name) {
          let str = condition.name;
          if (condition.number) {
            str = str.replace('{number}', condition.number.toString());
          }
          if (condition.contractItem?.entity?.name) {
            str = str.replace('{item_name}', hyperlink(condition.contractItem.entity.name, databaseUrl(context.locale, `${condition.contractItem.entity.mainCategoryId}/${condition.contractItem.entity.id}`)));
          }
          return str;
        }
        return 'Unknown';
      });

      if (conditions.length) {
        fields.push({
          name: 'Conditions',
          value: unorderedList(truncateArray(conditions, 5)),
        });
      }
    }

    const rewards: string[] = [];

    if (data.itemRewards?.length) {
      const items = data.itemRewards.map((item) => {
        if (!item.entity?.name) {
          return 'Unknown';
        }
        if (item.count) {
          if (item.entity?.isHidden) {
            return `x${item.count} ${item.entity.name}`;
          }
          return `x${item.count} ${hyperlink(item.entity.name, databaseUrl(context.locale, `${item.entity.mainCategoryId}/${item.entity.id}`))}`;
        }
        return item.entity.name;
      });
      rewards.push(...items);
    }

    if (data.contractCustomRewards?.length) {
      const customRewards = data.contractCustomRewards.map((reward) => {
        if (!reward.name) return 'Unknown';
        return reward.name;
      });
      rewards.push(...customRewards);
    }

    if (rewards.length) {
      fields.push({
        name: 'Rewards',
        value: unorderedList(truncateArray(rewards, 5)),
      });
    }

    if (data.chainName && data.chainContracts?.length) {
      fields.push({
        name: data.chainName,
        value: unorderedList(
          truncateArray(
            data.chainContracts.map((contract) =>
              hyperlink(contract.name ?? 'Unknown', databaseUrl(context.locale, `${contract.mainCategoryId}/${contract.id}`))
            ),
            5
          )
        ),
      });
    }

    embed.addFields(fields);

    await interaction.editReply({
      embeds: [embed],
      components: actionRow.components.length ? [actionRow] : [],
    });
  }

  override async autocomplete(interaction: AutocompleteInteraction, context: Context): Promise<void> {
    const value = interaction.options.getFocused();

    // TODO: Add type checking
    let data = await api.search(context.locale, value, ['contracts']);

    data = data.slice(0, 25);

    await interaction.respond(
      data
        .filter((entry) => entry.name !== undefined && entry.path !== undefined)
        .map((entry) => ({
          name: entry.name as string,
          value: entry.path as string,
        }))
    );
  }
})();
