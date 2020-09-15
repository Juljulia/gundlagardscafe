import groq from 'groq';
import client from '../functions/client';
import ContactForm from '../components/ContactForm';
import urlBuild from '../functions/imageBuilder';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Qa = ({ content }) => {
  const questionAndAnswer = content.questionAndAnswer;
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroImage.heroIcon.asset);
  return (
    <>
      {/* // <Layout pageTitle={content.header}> */}
      {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )}
      <div>
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
        <ContactForm topic="Fråga något" message="Berätta mer..." />
      </div>
      {/* </Layout> */}
    </>
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
