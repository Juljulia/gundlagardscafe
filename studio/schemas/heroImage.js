// mainImage.js
export default {
  name: 'heroImage',
  title: 'Image',
  type: 'image',
  //   options: {
  //     hotspot: true,
  //   },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Beskrivande text',
      description:
        'Viktigt för sökbarhet och träffar på Google. Syns ej på hemsidan.',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikon ovanför bilden',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
    },
  },
};
