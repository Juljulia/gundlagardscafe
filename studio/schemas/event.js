export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Event',
      name: 'eventList',
      type: 'array',
      of: [
        {
          title: 'Event',
          name: 'eventItem',
          type: 'object',
          fields: [
            {
              title: 'Rubrik',
              name: 'header',
              type: 'string',
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
        },
      ],
    },
  ],
};
