import {
  type APIEmbedField,
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  CommandInteraction,
  hyperlink,
  unorderedList,
} from 'discord.js';

import { Command, type Context } from '#models/command';
import { Embed } from '#models/embed';
import { type JourneyModel } from '#types/database';
import { api } from '#utils/api';
import { PROXY_URL, databaseUrl, truncateArray } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'story',
      description: 'Returns the details of the specified story',
      options: [
        {
          name: 'name',
          description: 'Name of the story',
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

    const data = await api.get<JourneyModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The story "${name}" could not be found.`);
      return;
    }

    const embed = new Embed();

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

    if (data.children?.length) {
      fields.push({
        name: 'Children',
        value: unorderedList(
          truncateArray(
            data.children.map((child) =>
              hyperlink(child.name ?? 'Unknown', databaseUrl(context.locale, `${child.mainCategoryId}/${child.id}`))
            ),
            5
          )
        ),
        inline: false,
      });
    }

    if (data.allResearchNodeRewards?.length) {
      fields.push({
        name: 'Research Node Rewards',
        value: unorderedList(
          truncateArray(
            data.allResearchNodeRewards.map((reward) =>
              hyperlink(reward.name ?? 'Unknown', `${databaseUrl}/research/${reward.id}`)
            ),
            5
          )
        ),
        inline: false,
      });
    }

    embed.addFields(fields);

    await interaction.editReply({
      embeds: [embed],
    });
  }

  override async autocomplete(interaction: AutocompleteInteraction, context: Context): Promise<void> {
    const value = interaction.options.getFocused();

    // TODO: Add type checking
    let data = await api.search(context.locale, value, ['Main Story']);

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
