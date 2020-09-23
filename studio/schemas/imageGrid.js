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
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste lägga till en bild för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Beskrivande text',
              description:
                'Viktigt för sökbarhet och träffar på Google samt tillgänglighet',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
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
