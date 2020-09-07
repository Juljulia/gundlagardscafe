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
      title: 'Bild',
      name: 'image',
      type: 'image',

      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
        },
      ],
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
