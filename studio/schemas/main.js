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
      name: 'homePageLink',
      title: 'Länk',
      type: 'object',
      description: 'Länk ovanpå förstasidans bild.',
      fieldsets: [{ name: 'homePageLink' }],
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
              { title: 'Öppettider', value: 'hitta-hit , Öppettider' },
            ],
          },
        },
      ],
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'iconLink',
      type: 'iconLink',
      title: 'Ikon och länk',
      description: 'Här väljer du vilka fyra sidor som länkas på förstasidan.',
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem bilder.',
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
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
