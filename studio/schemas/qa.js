import MdQuestionAnswer from 'react-icons/lib/md/question-answer';

export default {
  title: 'Frågor och svar',
  name: 'qa',
  type: 'document',
  fields: [
    {
      title: 'Rubrik',
      name: 'header',
      type: 'string',
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
    },
    {
      title: 'Frågor och svar',
      name: 'questionAndAnswer',
      type: 'array',
      of: [
        {
          title: 'Frågor och svar',
          name: 'questionAndAnswer',
          type: 'object',
          icon: MdQuestionAnswer,
          fields: [
            {
              title: 'Fråga',
              name: 'question',
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
              title: 'question',
            },
          },
        },
      ],
    },
  ],
};
