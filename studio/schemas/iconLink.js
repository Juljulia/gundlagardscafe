export default {
  name: 'iconLink',
  title: 'Ikon och Länk',
  type: 'array',
  validation: (Rule) => [Rule.required().length(4).error('Välj 4 bilder')],
  of: [
    {
      title: 'Ikon',
      name: 'icons',
      type: 'object',
      fields: [
        {
          title: 'Bild',
          name: 'image',
          type: 'image',
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Beskrivande text',
          description: 'Viktigt för sökbarhet och träffar på Google',
          options: {
            isHighlighted: true,
          },
        },
        {
          type: 'object',
          name: 'links',
          fieldsets: [{ name: 'iconLink', title: 'Ikon och länk' }],
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
          ],
        },
      ],
      preview: {
        select: {
          media: 'image',
          title: 'Bilder till Grid',
        },
      },
    },
  ],
};
