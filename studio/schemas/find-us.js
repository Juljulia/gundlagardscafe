export default {
  title: 'Hitta hit',
  name: 'find-us',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Huvudbild',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      title: 'Öppettider just nu',
      name: 'openHours',
      description:
        'Valfritt fält, fyll i om du har tydliga öppettider, annars håll fältet tomt',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Information om tillgänglighet',
      name: 'availability',
      type: 'array',
      validation: (Rule) => [
        Rule.required().length(4).error('Max fyra ikoner med text'),
      ],
      of: [
        {
          title: 'Tillgänglighet',
          name: 'availability',
          type: 'object',
          fields: [
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
              description:
                'Glöm inte att även gå in på "Edit" och beskriva bilden för bättre tillgänglighet',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste lägga till en bild för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
              fields: [
                {
                  title: 'Alternativtext',
                  name: 'alt',
                  type: 'string',
                  description:
                    'Viktigt för sökbarhet och träffar på Google samt tillgänglighet',
                  validation: (Rule) =>
                    Rule.required().warning(
                      'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                    ),
                },
              ],
            },
            {
              title: 'Rubrik',
              name: 'header',
              type: 'string',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
            },
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'header',
              media: 'image',
            },
            prepare(selection) {
              const { title = '', media } = selection;
              return {
                title: title,
                media: media,
              };
            },
          },
        },
      ],
    },
  ],
};
