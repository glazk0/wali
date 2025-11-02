import {
  type APIEmbedField,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
  subtext,
  unorderedList,
} from 'discord.js';

import { Command, type Context } from '#models/command';
import { Embed } from '#models/embed';
import { type SkillAttributeBonusModel, type SkillModel } from '#types/database';
import { api } from '#utils/api';
import { DATABASE_URL, PROXY_URL, databaseUrl } from '#utils/common';

export default new (class extends Command {
  constructor() {
    super({
      name: 'skill',
      description: 'Returns the details of the specified skill',
      options: [
        {
          name: 'name',
          description: 'Name of the skill',
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

    const data = await api.get<SkillModel>(name, context.locale);

    if (!data) {
      interaction.editReply(`The skill "${name}" could not be found.`);
      return;
    }

    const embed = new Embed();

    const actionRow = new ActionRowBuilder<ButtonBuilder>({
      components: [
        new ButtonBuilder({
          label: 'Try the Skill Builder',
          style: ButtonStyle.Link,
          url: databaseUrl(context.locale, 'skill-builder'),
        }),
      ],
    });

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

    if (data.skillTree) {
      fields.push({
        name: 'Skill Tree',
        value: data.skillTree,
        inline: true,
      });
    }

    if (data.skillType) {
      fields.push({
        name: 'Skill Type',
        value: data.skillType,
        inline: true,
      });
    }

    if (data.maxLevel) {
      fields.push({
        name: 'Max Level',
        value: data.maxLevel.toString(),
        inline: true,
      });
    }

    if (data.attributeBonuses?.length) {
      const attributeBonuses =
        data.attributeBonuses?.reduce((acc: Record<number, SkillAttributeBonusModel[]>, attribute) => {
          if (attribute.level !== undefined) {
            if (!acc[attribute.level]) {
              acc[attribute.level] = [];
            }
            (acc[attribute.level] = acc[attribute.level] || []).push(attribute);
          }
          return acc;
        }, {}) || {};

      for (const level of Object.keys(attributeBonuses).map(Number)) {
        const attributes = attributeBonuses[level];

        if (!attributes?.length) continue;

        let values: string[] = [];

        if (data.costPerlevel?.length) {
          const cost = data.costPerlevel[level - 1];
          if (cost) {
            values = [...values, `Cost: ${cost} Skill Points`];
          }
        }

        values = [
          ...values,
          ...attributes.map(({ name, value, isPercentBased, internalName, operation }) => {
            if (name && value) {
              const formattedValue = isPercentBased ? `${Math.abs(value * 100).toFixed(2)}%` : value.toString();
              const sign = value < 0 ? '-' : '';
              return `${name}: ${sign}${formattedValue}${operation && internalName ? `\n> ${internalName} - ${operation}` : ''}`;
            }
            return '';
          }),
        ];

        values = values.filter(Boolean);

        const levelRequirement = data.levelRequirements?.[level - 1];

        const value = [unorderedList(values), levelRequirement ? subtext(levelRequirement) : '']
          .filter(Boolean)
          .join('\n');

        if (values.length) {
          fields.push({
            name: `Level ${level}`,
            value,
          });
        }
      }
    }

    embed.addFields(fields);

    await interaction.editReply({
      embeds: [embed],
      components: [actionRow],
    });
  }

  override async autocomplete(interaction: AutocompleteInteraction, context: Context): Promise<void> {
    const value = interaction.options.getFocused();

    // TODO: Add type checking
    let data = await api.search(context.locale, value, ['skills']);

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
