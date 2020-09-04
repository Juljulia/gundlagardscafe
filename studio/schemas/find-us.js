export default {
  title: 'Hitta hit/Öppettider',
  name: 'find-us',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      title: 'Adress',
      name: 'adress',
      type: 'string',
    },
    {
      title: 'Launchpad Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Telefonnummer',
      name: 'number',
      type: 'string',
    },
  ],
};
