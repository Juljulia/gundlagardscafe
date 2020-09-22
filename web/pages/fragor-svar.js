import groq from 'groq';
import styled from 'styled-components';
import client from '../functions/client';
import ContactForm from '../components/ContactForm';
import InstaGrid from '../components/InstaGrid';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import 'lazysizes';

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

  .read-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    margin-top: 8px;
    cursor: pointer;
  }

  .read-more__button {
    background-color: white;
    border: white;
    box-shadow: none;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 109.6%;
    color: #2b2928;
    padding: 0;
    margin-bottom: 8px;
  }

  @media only screen and (min-width: 768px) {
    .qa {
      padding-left: 72px;
      padding-right: 56px;
    }
    .qa__container {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: auto;
    }

    .qa__content {
      padding-right: 16px;
    }

    .read-more {
      margin-top: 28px;
      margin-bottom: 64px;
    }
  }
`;

const Qa = ({ content }) => {
  const [amount, setAmount] = React.useState(4);
  const questionAndAnswer = content.questionAndAnswer.slice(0, amount);

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

  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
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
        <section className="qa" id="fs">
          <h1>{content.header}</h1>
          <article className="qa__container">
            {questionAndAnswer &&
              questionAndAnswer.map((object) => (
                <div key={object._key} className="qa__content">
                  <h2>{object.question}</h2>
                  <p>{object.answer}</p>
                </div>
              ))}
          </article>
          {amount <= 4 && (
            <div
              className="read-more"
              onClick={() => {
                setAmount(amount + 4);
              }}
            >
              <button className="read-more__button">Läs mer</button>
              <img data-src="arrow.png" className="lazyload"></img>
            </div>
          )}
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
