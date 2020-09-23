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
              description:
                'Viktigt för sökbarhet och träffar på Google samt tillgänglighet',
              type: 'string',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
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
                  },
                  {
                    title: 'Privata event',
                    value: 'privata-event , Privata event',
                  },
                  { title: 'Äta', value: 'mat , Äta' },
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
