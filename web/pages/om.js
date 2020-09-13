import groq from 'groq';
import client from '../sanity/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import ImageGrid from '../components/ImageGrid';

const About = ({ content }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const imageGrid = content.imageGrid;

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
      <ImageGrid images={imageGrid}></ImageGrid>
    </Layout>
  );
};

const query = groq`*[_type == 'about'][0]{
  header,
  hero,
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

export default About;
