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
  h1 {
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    margin: 0 16px;
  }

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 161.6%;
    letter-spacing: 0.025em;
    margin: 16px;
  }

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin: 0 16px;
  }

  li {
    list-style: none;
    font-size: 19px;
    line-height: 25px;
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
    background-color: #bd4101;
  }
  li:nth-child(2)::before {
    background-color: #959967;
  }
  li:nth-child(3)::before {
    background-color: #cd8501;
  }
  li:nth-child(4)::before {
    background-color: #ff5d84;
  }
  li:nth-child(5)::before {
    background-color: #6c5301;
  }

  @media only screen and (min-width: 768px) {
    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 635px;
      margin: 0 auto;
    }

    .categoryList {
      flex-wrap: nowrap;
      width: 609px;
      float: right;
      margin-right: 56px;
    }

    li {
      margin-right: 21px;
    }

    li::before {
      margin-right: 14px;
    }
  }
`;

const Event = ({ content }) => {
  // const heroImage = urlBuild(content.hero.heroImage.asset);
  // const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const imageGrid = content.imageGrid;
  const eventList = content.eventList;
  return (
    <StyledEvent>
      <Layout pageTitle={content.header}>
        <div className="textContainer">
          <h1>{content.header}</h1>
          <p>{content.description}</p>
        </div>
        <div className="categoryList">
          <li>Musik</li>
          <li>Marknad</li>
          <li>Teater</li>
          <li>Aktivteter</li>
          <li>Barn</li>
        </div>
        {/* {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )} */}
        <EventList event={eventList} grid={imageGrid}></EventList>
      </Layout>
    </StyledEvent>
  );
};

const query = groq`*[_type == 'event'][0]{
    header,
    hero,
    description,
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
