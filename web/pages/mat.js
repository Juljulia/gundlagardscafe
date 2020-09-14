import groq from 'groq';
import client from '../sanity/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import ImageGrid from '../components/ImageGrid';

const Food = ({ content }) => {
  console.log(content);
  // const heroImage = urlBuild(content.hero.heroImage.asset);
  // const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const imageGrid = content.imageGrid;
  return (
    <Layout pageTitle={content.header}>
      {/* {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )} */}
      <div>
        <h1>{content.header}</h1>
        <img src={content.image} alt={content.alt}></img>
        <p>{content.description}</p>
      </div>
      <ImageGrid images={imageGrid}></ImageGrid>
    </Layout>
  );
};

const query = groq`*[_type == 'food'][0]{
    header,
    hero,
    description,
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

export default Food;
