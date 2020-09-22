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
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Helbild',
      description: 'Första helbilden på sidan',
      validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Svar',
              name: 'answer',
              type: 'text',
              validation: (Rule) => Rule.required(),
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
