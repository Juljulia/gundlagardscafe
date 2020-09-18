export default {
  title: 'Hitta hit/Öppettider',
  name: 'find-us',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
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
              fields: [
                {
                  title: 'Alternativtext',
                  name: 'alt',
                  type: 'string',
                },
              ],
            },
            {
              title: 'Rubrik',
              name: 'header',
              type: 'string',
            },
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
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
