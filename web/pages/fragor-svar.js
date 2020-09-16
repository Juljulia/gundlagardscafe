import groq from 'groq';
import styled from 'styled-components';
import client from '../functions/client';
import ContactForm from '../components/ContactForm';
import InstaGrid from '../components/InstaGrid';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Container = styled.section`
  .qa {
    padding: 0 16px;
  }

  .qa h1,
  .qa h2 {
    padding-bottom: 32px;
  }

  .qa__content {
    padding-bottom: 48px;
  }

  @media only screen and (min-width: 768px) {
    .qa {
      padding: 0 72px;
      /* column-count: 2;
      column-gap: 64px; */
    }
    .qa__wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    .qa__content {
      border: 1px solid red;
      flex: 1 650px;
      padding: 0 72px 72px 0;
    }
  }
`;

const Qa = ({ content }) => {
  const questionAndAnswer = content.questionAndAnswer;
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const [instaData, setInstaData] = React.useState('');
  React.useEffect(() => {
    fetch('https://www.instagram.com/gundlagardscafe/?__a=1')
      .then((resp) => resp.json())
      .then((json) => setInstaData(json));
  }, [0]);
  let instaGrid = [];
  if (instaData) {
    instaGrid = instaData.graphql.user.edge_owner_to_timeline_media.edges;
  }
  return (
    <Layout pageTitle={content.header}>
      <Container>
        {content && (
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
          ></Hero>
        )}
        <section className="qa">
          <h1>{content.header}</h1>
          <article className="qa__wrapper">
            {questionAndAnswer &&
              questionAndAnswer.map((object) => (
                <div key={object._key} className="qa__content">
                  <h2>{object.question}</h2>
                  <p>{object.answer}</p>
                </div>
              ))}
          </article>
        </section>
        <ContactForm topic="Fråga något" message="Berätta mer..." />
        <InstaGrid images={instaGrid} className="insta-grid" />
      </Container>
    </Layout>
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
