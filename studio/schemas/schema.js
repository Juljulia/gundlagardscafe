import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import main from './main';
import event from './event';
import contact from './contact';

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([main, contact, event]),
});
