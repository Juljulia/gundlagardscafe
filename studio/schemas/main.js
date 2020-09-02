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
      title: 'Meny',
      name: 'menuItems',
      type: 'array',
      of: [
        {
          title: 'Meny-item',
          name: 'menuItems',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Ingrediens',
              name: 'ingredient',
              type: 'string',
            },
            {
              title: 'Pris',
              name: 'price',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
};
