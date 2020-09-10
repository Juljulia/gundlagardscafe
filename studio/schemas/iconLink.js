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
          title: 'Ikon',
          name: 'image',
          type: 'image',
          fields: [
            {
              title: 'Beskrivande text för ikonen',
              name: 'heroIconAlt',
              type: 'string',
            },
          ],
        },
        {
          title: 'Länk',
          type: 'object',
          name: 'links',
          fieldsets: [{ name: 'iconLink' }],
          fields: [
            {
              title: 'Välj en sida',
              name: 'link',
              type: 'string',
              options: {
                list: [
                  { title: 'Mat', value: 'mat', name: 'mat' },
                  { title: 'Privata event', value: 'privata-event' },
                  { title: 'Hitta hit', value: 'hitta-hit' },
                  { title: 'Frågor och svar', value: 'fragor-svar' },
                ],
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          media: 'image',
          title: 'links.link',
        },
      },
    },
  ],
};
