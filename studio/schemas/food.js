export default {
  title: 'Äta',
  name: 'food',
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
      type: 'array',
      validation: (Rule) => Rule.required(),
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
