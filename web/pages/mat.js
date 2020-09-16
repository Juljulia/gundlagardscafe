import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import ImageGrid from '../components/ImageGrid';
import PortableText from '@sanity/block-content-to-react';
import LinkToContact from '../components/LinkToContact';

const Food = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  console.log(heroIcon);
  const imageGrid = content.imageGrid;
  return (
    <>
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
          <h1>{content.header}</h1>
          <PortableText blocks={content.description} />
        </div>
        <LinkToContact></LinkToContact>
        <ImageGrid images={imageGrid}></ImageGrid>
      </Layout>
    </>
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
