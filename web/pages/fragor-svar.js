import groq from 'groq';
import client from '../sanity/client';
import ContactForm from '../components/ContactForm';
import urlBuild from '../sanity/imageBuilder';

const Qa = ({ content }) => {
  const questionAndAnswer = content.questionAndAnswer;
  return (
    <div>
      <img src={urlBuild(content.hero.asset)} alt={content.hero.alt}></img>
      <img src={urlBuild(content.icon.asset)} alt={content.icon.alt}></img>
      <h1>{content.header}</h1>
      <div>
        {questionAndAnswer &&
          questionAndAnswer.map((object) => (
            <div key={object._key}>
              <h3>{object.question}</h3>
              <p>{object.answer}</p>
            </div>
          ))}
      </div>
      <ContactForm />
    </div>
  );
};

const query = groq`*[_type == 'qa'][0]{
    hero,
    icon,
    header,
    questionAndAnswer
  }`;

export const getStaticProps = async () => {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default Qa;
