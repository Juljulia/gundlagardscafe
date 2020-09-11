export default {
  name: 'imageGrid',
  title: 'Bilder',
  type: 'array',
  validation: (Rule) => [Rule.required().length(5).error('Välj 5 bilder')],
  of: [
    {
      title: 'Bilder',
      name: 'images',
      type: 'object',
      fields: [
        {
          title: 'Bild',
          name: 'image',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Beskrivande text',
              description: 'Viktigt för sökbarhet och träffar på Google',
            },
          ],
        },
      ],
      preview: {
        select: {
          media: 'image',
          title: '',
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
};
