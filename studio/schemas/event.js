export default {
  title: 'Evenemang',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Kalender rubrik',
      name: 'calenderHeader',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Evenemang',
      name: 'eventList',
      type: 'array',
      options: [{ sortable: true }],
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
                Rule.max(30).warning('En kortare titel är att föredra'),
            },
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Beskrivande text',
                  description: 'Viktigt för sökbarhet och träffar på Google',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
              validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Musik', value: '#FFFA97' },
                  { title: 'Marknad', value: '#959967' },
                  { title: 'Teater', value: '#FECFB1' },
                  {
                    title: 'Aktiviteter',
                    value: '#FE9EB9',
                  },
                  { title: 'Barn', value: '#E96D6D' },
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
