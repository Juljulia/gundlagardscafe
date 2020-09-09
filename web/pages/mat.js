import groq from 'groq';
import client from '../sanity/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';

const Food = ({ content }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroIcon.asset);
  return (
    <Layout>
      {content && (
        <Hero
          heroImage={heroImage}
          heroImageAlt={content.heroImageAlt}
          heroIcon={heroIcon}
          heroIconAlt={content.heroIconAlt}
        ></Hero>
      )}
      <div>
        <h1>{content.header}</h1>
        <img src={content.image} alt={content.alt}></img>
        <p>{content.description}</p>
      </div>
    </Layout>
  );
};

const query = groq`*[_type == 'food'][0]{
    header,
    hero,
    "image": image.asset->url,
    alt,
    description
  }`;

export const getStaticProps = async () => {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default Food;
