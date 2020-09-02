import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Startsida')
        .child(S.editor().schemaType('main').documentId('main')),
      S.listItem()
        .title('Kontaktuppgifter')
        .child(S.editor().schemaType('contact').documentId('contact')),
      S.listItem()
        .title('Event')
        .child(S.editor().schemaType('event').documentId('event')),
    ]);
