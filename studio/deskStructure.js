import S from '@sanity/desk-tool/structure-builder';
import MdHome from 'react-icons/lib/md/home';
import MdEvent from 'react-icons/lib/md/event';
import MdPlace from 'react-icons/lib/md/place';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdRestaurant from 'react-icons/lib/md/restaurant';
import MdQuestionAnswer from 'react-icons/lib/md/question-answer';
import MdRoomService from 'react-icons/lib/md/room-service';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Startsida')
        .child(S.editor().schemaType('main').documentId('main'))
        .icon(MdHome),
      S.listItem()
        .title('Äta')
        .child(S.editor().schemaType('food').documentId('food'))
        .icon(MdRestaurant),
      S.listItem()
        .title('Evenemang')
        .child(S.editor().schemaType('event').documentId('event'))
        .icon(MdEvent),
      S.listItem()
        .title('Privata event')
        .child(
          S.editor().schemaType('private-event').documentId('private-event')
        )
        .icon(MdRoomService),
      S.listItem()
        .title('Hitta hit')
        .child(S.editor().schemaType('find-us').documentId('find-us'))
        .icon(MdPlace),
      S.listItem()
        .title('Frågor och svar')
        .child(S.editor().schemaType('qa').documentId('qa'))
        .icon(MdQuestionAnswer),
    ]);
