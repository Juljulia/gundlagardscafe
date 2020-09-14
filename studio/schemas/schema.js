import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import event from './event';
import findUs from './find-us';
import food from './food';
import heroImage from './heroImage';
import iconLink from './iconLink';
import imageGrid from './imageGrid';
import main from './main';
import privateEvent from './private-event';
import qa from './qa';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    event,
    findUs,
    food,
    iconLink,
    imageGrid,
    main,
    heroImage,
    privateEvent,
    qa,
  ]),
});
