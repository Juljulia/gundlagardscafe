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
      title: 'Helbild',
      description: 'Första helbilden på sidan',
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
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Tillgänglighet',
      name: 'availability',
      type: 'array',
      validation: (Rule) => [Rule.required().length(4).error('5 ikoner')],
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
