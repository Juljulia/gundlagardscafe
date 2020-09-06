const imageName = 'Bilder till grid';
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
