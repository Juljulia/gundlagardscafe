export default {
  name: 'hero',
  title: 'hero',
  type: 'document',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Huvudbild',
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
      fields: [
        {
          title: 'Beskrivande text för huvudbilden',
          name: 'heroImageAlt',
          type: 'string',
          validation: (Rule) => Rule.required(),
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
