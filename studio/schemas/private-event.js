export default {
  title: 'Privata event',
  name: 'private-event',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      name: 'heroImage',
      type: 'heroImage',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
    },
    {
      title: 'Underrubrik',
      name: 'subheading',
      type: 'string',
    },
    {
      title: 'Beskrivning',
      name: 'description',
      type: 'text',
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem bilder.',
    },
  ],
};
