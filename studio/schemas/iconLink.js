export default {
  name: 'iconLink',
  title: 'Ikon och Länk',
  type: 'array',
  of: [
    {
      name: 'icons',
      title: 'Ikon',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Ikon',
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
          name: 'links',
          title: 'Länk',
          type: 'object',
          fieldsets: [{ name: 'iconLink' }],
          fields: [
            {
              name: 'link',
              title: 'Välj en sida',
              type: 'string',
              options: {
                list: [
                  { title: 'Evenemang', value: 'event' },
                  { title: 'Frågor och svar', value: 'fragor-svar' },
                  { title: 'Hitta hit', value: 'hitta-hit' },
                  { title: 'Privata event', value: 'privata-event' },
                  { title: 'Om', value: 'om' },
                  { title: 'Äta', value: 'mat', name: 'mat' },
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
  validation: (Rule) => [
    Rule.required().min(3).max(4).unique().error('Välj 3-4 st.'),
  ],
};
