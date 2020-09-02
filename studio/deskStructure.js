import S from '@sanity/desk-tool/structure-builder';
import MdHome from 'react-icons/lib/md/home';
import MdEvent from 'react-icons/lib/md/event';
import MdPlace from 'react-icons/lib/md/place';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Startsida')
        .child(S.editor().schemaType('main').documentId('main'))
        .icon(MdHome),
      S.listItem()
        .title('Kontaktuppgifter')
        .child(S.editor().schemaType('contact').documentId('contact'))
        .icon(MdPlace),
      S.listItem()
        .title('Event')
        .child(S.editor().schemaType('event').documentId('event'))
        .icon(MdEvent),
    ]);
