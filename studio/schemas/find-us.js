export default {
  title: 'Hitta hit',
  name: 'find-us',
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
      title: 'Öppettider just nu',
      name: 'openHours',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Tillgänglighet',
      name: 'availability',
      type: 'array',
      validation: (Rule) => [Rule.required().length(4).error('5 ikoner')],
      of: [
        {
          title: 'Tillgänglighet',
          name: 'availability',
          type: 'object',
          fields: [
            {
              title: 'Bild',
              name: 'image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              fields: [
                {
                  title: 'Alternativtext',
                  name: 'alt',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              title: 'Rubrik',
              name: 'header',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Beskrivning',
              name: 'description',
              type: 'array',
              validation: (Rule) => Rule.required(),
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'header',
              media: 'image',
            },
            prepare(selection) {
              const { title = '', media } = selection;
              return {
                title: title,
                media: media,
              };
            },
          },
        },
      ],
    },
  ],
};
