import MdQuestionAnswer from 'react-icons/lib/md/question-answer';

export default {
  title: 'Frågor och svar',
  name: 'qa',
  type: 'document',
  fields: [
    {
      title: 'Huvudbild',
      name: 'hero',
      type: 'image',
      fields: [
        {
          title: 'Alternativtext',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'Ikon',
      name: 'icon',
      type: 'image',
      fields: [
        {
          title: 'Alternativtext',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      title: 'Frågor och svar',
      name: 'qa',
      type: 'array',
      of: [
        {
          title: 'Frågor och svar',
          name: 'qa',
          type: 'object',
          icon: MdQuestionAnswer,
          fields: [
            {
              title: 'Frågor',
              name: 'questions',
              type: 'string',
            },
            {
              title: 'Svar',
              name: 'answer',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'questions',
            },
          },
        },
      ],
    },
  ],
};
