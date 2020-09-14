export default {
  title: 'Evenemang',
  name: 'event',
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
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Evenemang',
      name: 'eventList',
      type: 'array',
      of: [
        {
          title: 'Evenemang',
          name: 'event',
          type: 'object',
          fields: [
            {
              title: 'Rubrik',
              name: 'header',
              type: 'string',
              description: 'En kortare titel är att föredra',
              validation: (Rule) =>
                Rule.max(30).warning('Shorter titles are usually better'),
            },
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
            },
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              title: 'Pris',
              description: 'Om eventet går att boka, fyll i pris här',
              name: 'price',
              type: 'number',
            },
            {
              title: 'Välj ett tema',
              name: 'category',
              type: 'string',
              options: {
                list: [
                  { title: 'Musik', value: '#BD4101;' },
                  { title: 'Marknad', value: '#959967' },
                  { title: 'Teater', value: '#E5B770' },
                  { title: 'Aktiviteter', value: 'rgba(255, 93, 132, 0.81);' },
                  { title: 'Barn', value: '##6C5301' },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'header',
              media: 'image',
              date: 'date',
            },
          },
        },
      ],
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem bilder.',
    },
  ],
};
