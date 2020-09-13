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
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
    },
    {
      title: 'Fest eller kalas',
      name: 'partyDescription',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Catering',
      name: 'cateringDescription',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem bilder.',
    },
  ],
};
