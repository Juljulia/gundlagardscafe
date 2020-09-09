export default {
  title: 'Mat',
  name: 'food',
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
      type: 'string',
    },
    {
      title: 'Bilder',
      name: 'imageGrid',
      type: 'array',
      validation: (Rule) => [Rule.required().length(5).error('Fem bilder')],
      of: [
        {
          title: 'Bilder',
          name: 'imageGrid',
          type: 'object',
          fields: [
            {
              title: 'Bild',
              name: 'gridImage',
              type: 'image',
              fields: [
                {
                  title: 'Alternativtext',
                  name: 'alt',
                  type: 'string',
                },
              ],
            },
          ],
          preview: {
            select: {
              media: 'gridImage',
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
