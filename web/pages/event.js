import groq from 'groq';
import client from '../sanity/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import BookingForm from '../components/BookingForm';
import ImageGrid from '../components/ImageGrid';
import EventList from '../components/EventList';
import styled from 'styled-components';

const StyledEvent = styled.div`
  margin: 16px;

  .category-list {
    display: flex;
    flex-wrap: wrap;
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
    background-color: #cd8501;
  }
  li:nth-child(3)::before {
    background-color: #6c5301;
  }
  li:nth-child(4)::before {
    background-color: #959967;
  }
  li:nth-child(5)::before {
    background-color: #ff5d84;
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
        <h1>{content.header}</h1>
        <p>{content.description}</p>
        <div class="category-list">
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
        <EventList event={eventList}></EventList>
        <ImageGrid images={imageGrid}></ImageGrid>
        <BookingForm></BookingForm>
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
