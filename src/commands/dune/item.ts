import {
  type APIEmbedField,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  AttachmentBuilder,
  AutocompleteInteraction,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  bold,
  hyperlink,
  unorderedList,
} from 'discord.js';

import { Command, type Context } from '#models/command';
import { Embed } from '#models/embed';
import { type AttributeValueModel, type ItemModel } from '#types/database';
import { api } from '#utils/api';
import { createColorPaletteImage } from '#utils/canvas';
import { DATABASE_URL, PROXY_URL, databaseUrl, truncateArray } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'item',
      description: 'Returns the details of the specified item',
      options: [
        {
          name: 'name',
          description: 'Name of the item',
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

    const data = await api.get<ItemModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The item "${name}" could not be found.`);
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

    if (data.dropLocations?.length) {
      actionRow.addComponents(
        new ButtonBuilder({
          label: 'View locations',
          style: ButtonStyle.Link,
          url: databaseUrl(context.locale, `${data.mainCategoryId}/${data.id}`),
        })
      );
    }

    const fields: APIEmbedField[] = [];

    if (data.attributeValues?.length) {
      const attributes = this.getAttributeValues(data.attributeValues);

      if (attributes.length) {
        const value = attributes
          .map(([key, value]) => {
            return `${bold(key)}: ${this.getStatValue(key, value)}`;
          });

        if (value.length) {
          fields.push({
            name: 'Attributes',
            value: unorderedList(value),
          });
        }
      }
    }

    if (data.requiredForContract?.length) {
      const contracts = data.requiredForContract.map((contract) => {
        if (!contract?.name) return 'Unknown';
        return hyperlink(contract.name ?? 'Unknown', databaseUrl(context.locale, `${contract.mainCategoryId}/${contract.id}`));
      });

      fields.push({
        name: 'Related Contracts',
        value: unorderedList(truncateArray(contracts, 5)),
      });
    }

    if (data.soldBy?.length) {
      const vendors = data.soldBy.map((vendor) => {
        if (!vendor?.entity) return 'Unknown';
        return hyperlink(vendor.entity.name ?? 'Unknown', databaseUrl(context.locale, `${vendor.entity.mainCategoryId}/${vendor.entity.id}`));
      });
      fields.push({
        name: 'Sold By',
        value: unorderedList(truncateArray(vendors, 5)),
      });
    }

    if (data.rewardFrom?.length) {
      const rewards = data.rewardFrom.map((reward) => {
        if (!reward?.entity) return 'Unknown';

        if (reward.count && reward.count > 1) {
          return `x${reward.count} ${hyperlink(reward.entity.name ?? 'Unknown', databaseUrl(context.locale, `${reward.entity.mainCategoryId}/${reward.entity.id}`))}`;
        }

        return hyperlink(reward.entity.name ?? 'Unknown', databaseUrl(context.locale, `${reward.entity.mainCategoryId}/${reward.entity.id}`));
      });
      fields.push({
        name: 'Rewarded From',
        value: unorderedList(truncateArray(rewards, 5)),
      });
    }

    let file: AttachmentBuilder | null = null;

    if (data.customization?.swatchColors?.length) {
      const image = createColorPaletteImage(data.customization.swatchColors);

      file = new AttachmentBuilder(image, { name: 'colors.png' });

      embed.setImage('attachment://colors.png');
    }

    embed.addFields(fields);

    await interaction.editReply({
      embeds: [embed],
      components: actionRow.components.length ? [actionRow] : [],
      files: file ? [file] : [],
    });
  }

  override async autocomplete(interaction: AutocompleteInteraction, context: Context): Promise<void> {
    const value = interaction.options.getFocused();

    // TODO: Add type checking
    let data = await api.search(context.locale, value, ['items']);

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

  private getAttributeValues(values: AttributeValueModel[]): [string, string | number][] {
    return values
      .filter((attr) => {
        if (!attr?.attribute?.name || attr.value == null) return false;
        if (typeof attr.value === 'string') return attr.value.trim().length > 0;
        if (typeof attr.value === 'number') return !isNaN(attr.value) && attr.value !== 0;
        if (typeof attr.value === 'object') return attr.value !== null;
        return false;
      })
      .map((attr) => {
        let name = attr.attribute?.name?.endsWith(':')
          ? attr.attribute.name.slice(0, -1)
          : attr.attribute?.name ?? '';
        let value = attr.value;

        if (typeof value === 'number') {
          value = Math.round(value * 1000) / 1000;
          if (
            attr.attribute &&
            attr.attribute.percentBased &&
            !attr.attribute.higherIsBetter &&
            value > 0
          ) {
            value = value - 1;
          }
        }

        if (attr.attribute && attr.attribute.percentBased) {
          value = (Math.round(Number(value) * 10000) / 100).toFixed(1) + '%';
        }

        return [name, value];
      });
  }

  private getStatValue(stat: string, value: string | number): string {
    if (typeof value === 'string') {
      return value;
    }

    if (stat.endsWith('MitigationArmor')) {
      return (Math.round(value * 10000) / 100).toFixed(1) + '%';
    }

    return (Math.round(Number(value) * 100) / 100).toString();
  }
})();
