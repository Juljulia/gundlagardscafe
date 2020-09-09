export default {
  title: 'Om',
  name: 'about',
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
