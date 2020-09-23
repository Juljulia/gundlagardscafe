export default {
  title: 'Evenemang',
  name: 'event',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
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
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      title: 'Kalender rubrik',
      name: 'calenderHeader',
      type: 'string',
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
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
            },
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
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
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
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
              validation: (Rule) =>
                Rule.required().warning(
                  'Du måste välje ett tema för att kunna trycka på "Publish" och publicera dina ändringar.'
                ),
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
