import { ApplicationCommandOptionType, AutocompleteInteraction, CommandInteraction } from 'discord.js';

import { commands } from '#commands';
import { Command, type Context } from '#models/command';
import { api } from '#utils/api';

export default new (class extends Command {
  constructor() {
    super({
      name: 'search',
      description: 'Searches for an item, contract, or other entity',
      options: [
        {
          name: 'name',
          description: 'Name of the item, contract, or other entity to search for',
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

    let [category, id] = name.split('/');

    if (!category || !id) {
      await interaction.editReply('The search did not return a valid category and ID.');
      return;
    }

    if (category === 'buildables') {
      category = 'building';
    }

    let singularCategory = category.endsWith('s') ? category.slice(0, -1) : category;

    const command = commands.get(singularCategory);

    if (!command) {
      await interaction.editReply(`The category "${category}" is not recognized. Please check the name and try again.`);
      return;
    }

    await command.execute(interaction, context);
  }

  override async autocomplete(interaction: AutocompleteInteraction, context: Context): Promise<void> {
    const value = interaction.options.getFocused();

    // TODO: Add type checking
    let data = await api.search(context.locale, value, [
      'items',
      'contracts',
      'buildables',
      'npcs',
      'skills',
    ]);

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
