import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';

const StyledFindUs = styled.div`
  .openHours,
  .availabilityItems {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .availabilityItems {
    background-color: #ffebe1;

    p {
      margin: 16px 35px 62px 35px;
      font-size: 20px;
      line-height: 161.1%;
      letter-spacing: 0.025em;
    }
  }

  h3 {
    text-align: center;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 16px;
  }

  p {
    margin: 15px 16px 24px 16px;
    font-size: 20px;
    line-height: 161.1%;
    letter-spacing: 0.025em;
  }

  .googleMaps {
    margin: 30px 16px;

    iframe {
      border-radius: 9px;
      width: 100%;
      height: 310px;
    }
  }

  @media only screen and (min-width: 768px) {
    .openHours {
      p {
        text-align: left;
        width: 636px;
        height: 186px;
      }
      h3 {
        margin-bottom: 0;
      }
    }

    .availabilityWrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
      height: auto;
      background-color: #ffebe1;
      padding: 0 72px;
    }

    .availabilityItems {
      height: auto;
      justify-content: flex-start;
      overflow: auto;
      max-width: 310px;
      h3 {
        margin-bottom: 0;
      }

      p {
        margin: 16px 12px 62px 12px;
      }
    }

    h3 {
      margin-bottom: 30px;
    }

    img {
      margin-top: 36px;
    }

    .googleMaps {
      margin: 54px 72px;
      iframe {
        max-width: 636px;
        height: 540px;
      }
    }
  }
`;

const FindUs = ({ content }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroImage.heroIcon.asset);
  const availability = content.availability;
  return (
    // <Layout pageTitle={content.header}>
    <StyledFindUs>
      {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )}
      <div className="openHours">
        <h3>Öppettider</h3>
        <p>{content.openHours}</p>
      </div>
      <h3>Hitta hit</h3>
      <div className="availabilityWrapper">
        {availability.map((object) => (
          <div key={object._key} class="availabilityItems">
            <img
              src={urlBuild(object.image.asset)}
              alt={object.image.alt}
            ></img>
            <h3>{object.header}</h3>
            <PortableText blocks={object.description} />
          </div>
        ))}
      </div>
      <div className="googleMaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7756947796547!2d12.02605491600651!3d57.68629018111437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1sen!2sse!4v1599492272828!5m2!1sen!2sse"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </StyledFindUs>
    // </Layout>
  );
};

const query = groq`*[_type == 'find-us'][0]{
    hero,
    icon,
    header,
    availability,
    openHours
  }`;

export const getStaticProps = async () => {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default FindUs;
