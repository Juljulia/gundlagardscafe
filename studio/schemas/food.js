export default {
  title: 'Äta',
  name: 'food',
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
      title: 'Huvudbild',
      validation: (Rule) => Rule.required(),
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
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem olika bilder',
    },
  ],
};
