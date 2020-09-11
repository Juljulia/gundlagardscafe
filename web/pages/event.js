import groq from 'groq';
import client from '../sanity/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import BookingForm from '../components/BookingForm';
import ImageGrid from '../components/ImageGrid';

const Event = ({ content }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const imageGrid = content.imageGrid;
  const eventList = content.eventList;
  return (
    <Layout pageTitle={content.header}>
      {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )}
      <div>
        {eventList &&
          eventList.map((object) => (
            <div key={object._key}>
              <h3>{object.header}</h3>
              <img src={urlBuild(object.image.asset)}></img>
              <p>{object.description}</p>
              <p>{object.date}</p>
            </div>
          ))}
      </div>
      <ImageGrid images={imageGrid}></ImageGrid>
      <BookingForm></BookingForm>
    </Layout>
  );
};

const query = groq`*[_type == 'event'][0]{
    header,
    hero,
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
