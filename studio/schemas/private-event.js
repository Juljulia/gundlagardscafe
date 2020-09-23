export default {
  title: 'Privata event',
  name: 'private-event',
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
      title: 'Fest eller kalas',
      name: 'partyDescription',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      title: 'Catering',
      name: 'cateringDescription',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) =>
        Rule.required().warning(
          'Du måste fylla i detta fält för att kunna trycka på "Publish" och publicera dina ändringar.'
        ),
    },
    {
      name: 'imageGrid',
      type: 'imageGrid',
      title: 'Bilder till collage',
      description: 'Välj fem bilder.',
    },
  ],
};
