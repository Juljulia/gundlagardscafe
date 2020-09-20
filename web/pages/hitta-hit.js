import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';

const StyledFindUs = styled.div`
  .open-hours {
    margin: 0 16px;
    margin-top: -16px;
    h1 {
      margin-bottom: 18px;
    }

    p {
      margin-bottom: 42px;
    }
  }

  .open-hours-now {
    h2 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 29px;
    }
  }

  .availability-wrapper {
    margin-bottom: 64px;
  }

  .availability-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    padding-bottom: 0;
    margin-bottom: 27px;

    h2 {
      line-height: 50px;
      text-align: center;
      text-transform: uppercase;
      margin: 16px;
    }
  }

  .google-maps {
    margin: 64px 16px;

    iframe {
      border-radius: 9px;
      width: 100%;
      height: 310px;
    }

    p {
      display: none;
    }
  }

  @media (max-width: 900px) and (min-width: 400px) {
    .open-hours-container {
      flex-wrap: wrap;
    }
  }

  @media only screen and (min-width: 768px) {
    .open-hours-container {
      margin: 0 72px;
      .open-hours {
        width: 636px;
        margin-bottom: 16px;
      }
    }

    .availability-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      height: auto;
      padding: 32px 72px;
      padding-bottom: 0;
    }

    .availability-items {
      height: auto;
      justify-content: flex-start;
      overflow: auto;
      width: 42%;
      align-items: flex-start;
      padding: 0;

      h2 {
        margin: 32px 0;
      }

      p {
        margin-bottom: 56px;
      }
    }

    .google-maps {
      margin: 0;
      display: flex;
      align-items: center;
      iframe {
        max-width: 636px;
        width: 500px;
        height: 400px;
      }

      p {
        margin-left: 23px;
      }
    }

    .open-hours-container {
      display: flex;
      justify-content: space-between;
      width: calc(100vw - 144px);
      margin-bottom: 20px;
    }
  }
`;

const FindUs = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const availability = content.availability;
  return (
    <Layout pageTitle={content.header}>
      <StyledFindUs>
        {content && (
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
          ></Hero>
        )}
        <div className="open-hours-container" id="oppettider">
          <div className="open-hours">
            <h1>{content.header}</h1>
            <p>{content.description}</p>
            {content.openHours && (
              <PortableText
                className="open-hours-now"
                blocks={content.openHours}
              />
            )}
          </div>
          <div className="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7756947796547!2d12.02605491600651!3d57.68629018111437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1sen!2sse!4v1599492272828!5m2!1sen!2sse"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
          </div>
        </div>
        <div className="availability-wrapper">
          {availability.map((object) => (
            <div key={object._key} class="availability-items">
              <img
                src={urlBuild(object.image.asset)}
                alt={object.image.alt}
              ></img>
              <h2>{object.header}</h2>
              <PortableText blocks={object.description} />
            </div>
          ))}
        </div>
      </StyledFindUs>
    </Layout>
  );
};

const query = groq`*[_type == 'find-us'][0]{
    hero,
    icon,
    header,
    availability,
    description,
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
