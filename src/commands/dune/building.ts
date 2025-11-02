import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ButtonBuilder,
  CommandInteraction,
  hyperlink,
  unorderedList,
  type APIEmbedField
} from 'discord.js';

import { Command, type Context } from '#models/command';
import { Embed } from '#models/embed';
import { type PlaceableModel } from '#types/database';
import { api } from '#utils/api';
import { DATABASE_URL, databaseUrl, PROXY_URL, truncateArray } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'building',
      description: 'Returns the details of the specified building',
      options: [
        {
          name: 'name',
          description: 'Name of the building',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
        {
          name: 'quantity',
          description: 'Quantity of the building',
          type: ApplicationCommandOptionType.Integer,
          required: false,
        },
        {
          name: 'deep-desert',
          description: 'Whether the building is built in the deep desert',
          type: ApplicationCommandOptionType.Boolean,
          required: false,
        }
      ],
    });
  }

  override async execute(interaction: CommandInteraction, context: Context): Promise<void> {
    if (!interaction.isChatInputCommand()) return;

    if (!interaction.deferred) await interaction.deferReply();

    const name = interaction.options.getString('name', true);
    const quantity = Math.max(1, Math.min(interaction.options.getInteger('quantity') ?? 1, 999));
    const deepDesert = interaction.options.getBoolean('deep-desert') ?? false;

    const data = await api.get<PlaceableModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The building "${name}" could not be found.`);
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

    if (data.ingredients?.length) {
      const ingredients = data.ingredients.map((ingredient) => {
        if (!ingredient?.entity?.name) return 'Unknown';
        if (ingredient?.quantity) {
          const finalQuantity = deepDesert ? Math.ceil((ingredient.quantity * quantity) / 2) : ingredient.quantity * quantity;
          return `x${finalQuantity} ${hyperlink(ingredient.entity.name, databaseUrl(context.locale, `${ingredient.entity.mainCategoryId}/${ingredient.entity.id}`))}`;
        }
        return hyperlink(ingredient.entity.name, databaseUrl(context.locale, `${ingredient.entity.mainCategoryId}/${ingredient.entity.id}`));
      });
      fields.push({
        name: 'Ingredients',
        value: unorderedList(truncateArray(ingredients, 10)),
        inline: true,
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
    let data = await api.search(context.locale, value, ["buildables"]);

    data = data.slice(0, 25);

    await interaction.respond(
      data
        .filter((entry) => entry.name !== undefined && entry.path !== undefined)
        .map((entry) => ({
          name: `${entry.name} (${entry.type})`,
          value: entry.path as string,
        }))
    );
  }
})();
