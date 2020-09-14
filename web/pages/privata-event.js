import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import ImageGrid from '../components/ImageGrid';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import PortableText from '@sanity/block-content-to-react';
import Link from 'next/link';

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

      h3 {
        font-family: Amatic SC;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 50px;
        color: #2b2928;
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

        h3 {
        }

        p {
          font-size: 20px;
          width: 100%;
        }
      }
    }
  }
`;

const PrivateEvent = ({ content }) => {
  // const heroImage = urlBuild(content.hero.heroImage.asset);
  // const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const imageGrid = content.imageGrid;
  return (
    <Layout pageTitle={content.header}>
      <StyledPrivateEvent>
        {/* {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )} */}
        <div className="privateEventWrapper">
          <div className="privateEventInfo">
            <h3>Fest eller kalas</h3>
            <PortableText blocks={content.partyDescription} />
          </div>
          <div className="privateEventInfo">
            <h3>Catering</h3>
            <PortableText blocks={content.cateringDescription} />
          </div>
        </div>
        <div className="linkToContact">
          <p>Skicka gärna en förfrågan så kan vi se hur vi kan hjälpa er.</p>
          <Link href="#event-form">
            <button>Förfrågan</button>
          </Link>
        </div>
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
