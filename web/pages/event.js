import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import BookingForm from '../components/BookingForm';
import ImageGrid from '../components/ImageGrid';
import EventList from '../components/EventList';
import styled from 'styled-components';

const StyledEvent = styled.div`
  .text-container {
    margin: 0 16px;

    h1 {
      margin-bottom: 32px;
    }
  }

  .calender-header {
    margin-top: 64px;
    margin-bottom: 32px;
    margin-left: 16px;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 16px;
    margin-bottom: 32px;

    li {
      font-size: 20px;
      line-height: 26px;
      list-style: none;
      display: flex;
      align-items: center;
      margin: 4px 0;
      width: 50%;
    }

    li::before {
      content: '';
      width: 27px;
      height: 27px;
      border-radius: 100%;
      display: block;
      background-color: hotpink;
      margin-right: 20px;
    }

    li:nth-child(1)::before {
      background-color: #fffa97;
    }
    li:nth-child(2)::before {
      background-color: #959967;
    }
    li:nth-child(3)::before {
      background-color: #fecfb1;
    }
    li:nth-child(4)::before {
      background-color: #fe9eb9;
    }
    li:nth-child(5)::before {
      background-color: #e96d6d;
    }
  }

  @media only screen and (min-width: 768px) {
    .text-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 635px;
      margin: 0 auto;
    }

    .calender-header-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-left: 72px;

      h2 {
        margin-left: 0;
        margin-bottom: 0;
      }

      .category-list {
        flex-wrap: nowrap;
        margin-right: 56px;
        margin-bottom: 0;

        li {
          margin-right: 21px;
        }

        li::before {
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
  }
`;

const Event = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const imageGrid = content.imageGrid;
  const eventList = content.eventList;
  return (
    <StyledEvent>
      <Layout pageTitle={content.header}>
        {content && (
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
          ></Hero>
        )}
        <div className="text-container">
          <h1>{content.header}</h1>
          <p>{content.description}</p>
        </div>
        <div className="calender-header-wrapper">
          <h2 className="calender-header">{content.calenderHeader}</h2>
          <div className="category-list">
            <li>Musik</li>
            <li>Marknad</li>
            <li>Teater</li>
            <li>Aktivteter</li>
            <li>Barn</li>
          </div>
        </div>

        <EventList event={eventList} grid={imageGrid}></EventList>
      </Layout>
    </StyledEvent>
  );
};

const query = groq`*[_type == 'event'][0]{
    header,
    hero,
    description,
    calenderHeader,
    eventList,
    imageGrid
  }`;

export const getStaticProps = async function () {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default Event;
