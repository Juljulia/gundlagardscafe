export default {
  title: 'Startsida',
  name: 'main',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Välkomsttext',
      name: 'welcome',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Huvudbild',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'homePageLink',
      title: 'Länk ovanpå förstasidans bild',
      type: 'object',
      fieldsets: [{ name: 'homePageLink' }],
      fields: [
        {
          name: 'link',
          title: 'Välj en sida du vill länka till',
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
              { title: 'Öppettider', value: 'hitta-hit , Öppettider' },
            ],
          },
        },
      ],
    },
    {
      name: 'iconLink',
      type: 'iconLink',
      title: 'Ikoner med länkar',
      description: 'Välj vilka fyra sidor som länkas på förstasidan',
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem olika bilder',
    },
    {
      title: 'Om oss',
      name: 'aboutUs',
      type: 'object',
      fields: [
        {
          title: 'Rubrik',
          name: 'header',
          type: 'string',
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
        },
        {
          title: 'Text',
          name: 'text',
          type: 'array',
          of: [{ type: 'block' }],
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
        },
      ],
    },
    {
      title: 'Historian',
      name: 'history',
      type: 'object',
      fields: [
        {
          title: 'Rubrik',
          name: 'header',
          type: 'string',
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
        },
        {
          title: 'Text',
          name: 'text',
          type: 'array',
          of: [{ type: 'block' }],
          validation: (Rule) =>
            Rule.required().warning(
              'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
            ),
        },
        {
          name: 'image',
          type: 'image',
          title: 'Bild',
          description:
            'Glöm inte att även gå in på "Edit" och beskriva bilden för bättre tillgänglighet',
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
    },
  ],
};
