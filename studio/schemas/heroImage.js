export default {
  name: 'hero',
  title: 'hero',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Huvudbild',
      options: {
        isHighlighted: true,
      },
      fields: [
        {
          title: 'Beskrivande text för huvudbilden',
          name: 'heroImageAlt',
          type: 'string',
        },
        {
          name: 'heroIcon',
          type: 'image',
          title: 'Ikon ovanför bilden',
          fields: [
            {
              title: 'Beskrivande text för iconen',
              name: 'heroIconAlt',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
