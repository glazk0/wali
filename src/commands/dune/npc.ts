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
import { type NpcModel } from '#types/database';
import { api } from '#utils/api';
import { DATABASE_URL, databaseUrl, PROXY_URL, truncateArray } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'npc',
      description: 'Returns the details of the specified npc',
      options: [
        {
          name: 'name',
          description: 'Name of the npc',
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

    const data = await api.get<NpcModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The npc "${name}" could not be found.`);
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

    if (data.contracts?.length) {
      const contracts = data.contracts.map((contract) => {
        if (!contract?.name) return 'Unknown';
        return hyperlink(contract.name ?? 'Unknown', databaseUrl(context.locale, `${contract.mainCategoryId}/${contract.id}`));
      });

      fields.push({
        name: 'Related Contracts',
        value: unorderedList(truncateArray(contracts, 10)),
      });
    }

    if (data.quests?.length) {
      const quests = data.quests.map((quest) => {
        if (!quest?.name) return 'Unknown';
        return hyperlink(quest.name ?? 'Unknown', databaseUrl(context.locale, `${quest.mainCategoryId}/${quest.id}`));
      });

      fields.push({
        name: 'Related Quests',
        value: unorderedList(truncateArray(quests, 10)),
      });
    }

    if (data.sellsItems?.length) {
      const items = data.sellsItems.map((item) => {
        if (!item.entity?.name) {
          return 'Unknown';
        }
        const price =
          item.entity.baseBuyFromVendorPrice && item.percentToApplyOnBaseItemPrice
            ? Math.round(item.entity.baseBuyFromVendorPrice * item.percentToApplyOnBaseItemPrice)
            : undefined;

        const priceStr = price !== undefined
          ? ` for ${price.toLocaleString(context.locale)}/unit`
          : '';

        if (item.stockAmount) {
          return `x${item.stockAmount} ${hyperlink(item.entity.name, databaseUrl(context.locale, `${item.entity.mainCategoryId}/${item.entity.id}`))}${priceStr}`;
        }

        return `∞ ${hyperlink(item.entity.name, databaseUrl(context.locale, `${item.entity.mainCategoryId}/${item.entity.id}`))}${priceStr}`;
      });

      fields.push({
        name: 'Sells Items',
        value: unorderedList(truncateArray(items, 10)),
      });
    }

    if (Object.keys(data).length) {
      actionRow.addComponents(
        new ButtonBuilder({
          label: 'View locations',
          style: ButtonStyle.Link,
          url: databaseUrl(context.locale, `${data.mainCategoryId}/${data.id}`),
        })
      );
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
    let data = await api.search(context.locale, value, ['npcs']);

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
