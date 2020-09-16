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

    h1 {
      margin-top: 64px;
      margin-bottom: 18px;
    }

    p {
      margin-bottom: 29px;
    }
  }

  .availability-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
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
    margin: 85px 16px;

    iframe {
      border-radius: 9px;
      width: 100%;
      height: 310px;
    }
  }

  @media only screen and (min-width: 768px) {
    .open-hours-container {
      display: flex;
      justify-content: center;

      .open-hours {
        width: 636px;
        margin-bottom: 131px;
      }
    }

    .availability-wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
      height: auto;
      background-color: #ffebe1;
      padding: 32px 72px;
    }

    .availability-items {
      height: auto;
      justify-content: flex-start;
      overflow: auto;
      width: 20%;

      p {
        margin: 14px 24px 15px 24px;
        color: red;
        border: solid 1px green;
        padding: 50px;
      }
    }

    .google-maps {
      margin: 54px 72px;
      iframe {
        max-width: 636px;
        height: 540px;
      }
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
        <div className="open-hours-container">
          <div className="open-hours">
            <h1>{content.header}</h1>
            <p>{content.openHours}</p>
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
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7756947796547!2d12.02605491600651!3d57.68629018111437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1sen!2sse!4v1599492272828!5m2!1sen!2sse"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
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
