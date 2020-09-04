export default {
  title: 'Hitta hit/Öppettider',
  name: 'findUs',
  type: 'document',
  fields: [
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
