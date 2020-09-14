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
                  {
                    title: 'Evenemang',
                    value: 'event , Evenemang',
                  },
                  {
                    title: 'Frågor och svar',
                    value: 'fragor-svar , Frågor och svar',
                  },
                  {
                    title: 'Hitta hit',
                    value: 'hitta-hit , Hitta hit',
                    name: 'Hitta hit',
                  },
                  {
                    title: 'Privata event',
                    value: 'privata-event , Privata event',
                  },
                  { title: 'Äta', value: 'mat Äta' },
                  { title: 'Öppettider', value: 'find-us , Öppettider' },
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
