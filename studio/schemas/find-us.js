export default {
  title: 'Hitta hit/Öppettider',
  name: 'find-us',
  type: 'document',
  fields: [
    {
      title: 'Huvudbild',
      name: 'hero',
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
      title: 'Ikon',
      name: 'icon',
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
      title: 'Underrubrik',
      name: 'subheading',
      type: 'string',
    },
    {
      title: 'Launchpad Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
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
              type: 'text',
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
