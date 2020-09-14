export default {
  title: 'Startsida',
  name: 'main',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      title: 'Välkomsttext',
      name: 'welcome',
      type: 'string',
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
              { title: 'Öppettider', value: 'find-us / Öppettider' },
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
        },
        {
          title: 'Text',
          name: 'text',
          type: 'text',
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
        },
        {
          title: 'Text',
          name: 'text',
          type: 'text',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Bild',
        },
      ],
    },
  ],
};
