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
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
    },
    {
      title: 'Vill du att öppettiderna ska synas på startsidan?',
      name: 'showOrHideOpenHours',
      type: 'boolean',
    },
    {
      name: 'iconLinks',
      type: 'iconLinks',
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
