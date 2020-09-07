const imageName = 'Bilder till grid';
export default {
  title: 'Startsida',
  name: 'main',
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
      title: 'Vill du att öppettiderna ska synas på startsidan?',
      name: 'showOrHideOpenHours',
      type: 'boolean',
    },
    {
      name: 'iconLink',
      type: 'object',
      fieldsets: [
        {
          name: 'iconLink',
          title: 'Ikon och länk',
        },
      ],
      fields: [
        {
          title: 'Länk',
          name: 'link',
          type: 'string',
          options: {
            list: [
              { title: 'Mat', value: 'food' },
              { title: 'Privata event', value: 'private-event' },
              { title: 'Hitta hit', value: 'find-us' },
              { title: 'Frågor och svar', value: 'qa' },
            ],
          },
        },
        {
          title: 'Ikon',
          name: 'icon',
          type: 'image',
        },
      ],
    },
    {
      title: 'Bilder',
      name: 'imageGrid',
      type: 'array',
      of: [
        {
          title: 'Bilder',
          name: 'imageGrid',
          type: 'object',
          fields: [
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: imageName,
            },
          },
        },
      ],
    },
  ],
};
