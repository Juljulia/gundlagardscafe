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
      title: 'Evenemang',
      name: 'eventList',
      type: 'array',
      of: [
        {
          title: 'Evenemang',
          name: 'eventItem',
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
              type: 'string',
            },
            {
              title: 'Datum och tid',
              name: 'date',
              type: 'datetime',
            },
          ],
          preview: {
            select: {
              title: 'header',
              media: 'image',
              date: 'date',
            },
            prepare(selection) {
              const { title, date, media } = selection;
              return {
                title: title,
                media: media,
                subtitle: date.split('T')[0], // YYYY-MM-DD --> YYYY
              };
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
