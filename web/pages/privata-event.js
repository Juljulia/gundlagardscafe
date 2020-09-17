import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import ImageGrid from '../components/ImageGrid';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import LinkToContact from '../components/LinkToContact';
import PortableText from '@sanity/block-content-to-react';

const StyledPrivateEvent = styled.div`
  .linkToContact {
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

  .privateEventWrapper {
    display: flex;
    flex-direction: column;
    margin: 32px 16px;

    .privateEventInfo {
      margin: 32px 0;

      h2 {
        line-height: 50px;
        margin-bottom: 32px;
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
    .linkToContact {
      p {
        font-size: 20px;
        margin-bottom: 19px;
      }

      button {
      }
    }

    .privateEventWrapper {
      flex-direction: row;
      margin: 62px 73px;

      .privateEventInfo {
        width: 50%;
        margin: 16px;

        p {
          font-size: 20px;
          width: 100%;
        }
      }
    }
  }
`;

const PrivateEvent = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const imageGrid = content.imageGrid;
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
        <div className="privateEventWrapper">
          <div className="privateEventInfo">
            <h2>Fest eller kalas</h2>
            <PortableText blocks={content.partyDescription} />
          </div>
          <div className="privateEventInfo">
            <h2>Catering</h2>
            <PortableText blocks={content.cateringDescription} />
          </div>
        </div>
        <LinkToContact></LinkToContact>
        <ImageGrid images={imageGrid}></ImageGrid>
        <ContactForm
          topic="Fira något stort?"
          message="Berätta mer..."
          id="event-form"
        ></ContactForm>
      </StyledPrivateEvent>
    </Layout>
  );
};

const query = groq`*[_type == 'private-event'][0]{
  header,
  hero,
  imageGrid,
  partyDescription,
  cateringDescription
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
