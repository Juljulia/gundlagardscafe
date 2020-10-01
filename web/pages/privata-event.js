import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import ImageGrid from '../components/ImageGrid';
import InstaGrid from '../components/InstaGrid';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import LinkToContact from '../components/LinkToContact';
import PortableText from '@sanity/block-content-to-react';

const StyledPrivateEvent = styled.div`
  margin-top: -24px;
  max-width: 100vw;
  overflow-x: hidden;

  h1 {
    margin: 0 16px;
  }
  .link-to-contact {
    height: 216px;
    background: #fecfb1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 51px;

    p {
      text-align: center;
      font-weight: 300;
      font-size: 16px;
      line-height: 161.1%;
      letter-spacing: 0.025em;
      color: #2b2928;
      margin: 16px 16px;
    }

    button {
      width: 150px;
      height: 43px;
      filter: drop-shadow(0px 4px 6px rgba(205, 133, 1, 0.25));
      background: #cd8501;
      border-radius: 11px;
      font-size: 25px;
      color: #ffffff;
      border: none;
      font-family: Amatic SC;
      line-height: 32px;
    }
  }

  .private-event-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0px 16px;

    .private-event-info {
      margin: 32px 0;

      h2 {
        line-height: 50px;
        margin-bottom: 16px;
      }

      p {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 161.1%;
        letter-spacing: 0.025em;
        color: #2b2928;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      margin: 0 72px;
    }
    .link-to-contact {
      p {
        font-size: 20px;
        margin-bottom: 19px;
      }

      button {
      }
    }

    .private-event-wrapper {
      flex-direction: row;
      margin: 52px 72px;

      .private-event-info {
        width: 50%;
        margin: 0;

        p {
          font-size: 20px;
          width: 100%;
        }

        h2 {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

const PrivateEvent = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const imageGrid = content.imageGrid;

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
      <StyledPrivateEvent>
        {content && (
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
          ></Hero>
        )}
        <h1>{content.header}</h1>
        <div className="private-event-wrapper">
          <div className="private-event-info">
            <h2>Fest eller kalas</h2>
            <PortableText blocks={content.partyDescription} />
          </div>
          <div className="private-event-info">
            <h2>Catering</h2>
            <PortableText blocks={content.cateringDescription} />
          </div>
        </div>
        <LinkToContact></LinkToContact>
        <ImageGrid images={imageGrid}></ImageGrid>
        <div className="achor" id="booking-form"></div>
        <ContactForm
          topic="Vad planerar du för event?"
          message="Berätta mer om din planer..."
          id="event-form"
        ></ContactForm>
        <InstaGrid images={instaGrid} className="insta-grid" />
      </StyledPrivateEvent>
    </Layout>
  );
};

const query = groq`*[_type == 'private-event'][0]{
  header,
  hero,
  imageGrid,
  partyDescription,
  cateringDescription,
}`;

export const getStaticProps = async function () {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default PrivateEvent;
