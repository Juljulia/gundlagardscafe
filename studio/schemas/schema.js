import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import main from './main';
import event from './event';
import findUs from './find-us';
import about from './about';
import food from './food';
import privateEvent from './private-event';
import qa from './qa';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
    main,
    findUs,
    event,
    about,
    qa,
    privateEvent,
    food,
  ]),
});
