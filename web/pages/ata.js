import groq from 'groq';
import client from '../functions/client';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import urlBuild from '../functions/imageBuilder';
import ImageGrid from '../components/ImageGrid';
import PortableText from '@sanity/block-content-to-react';
import LinkToContact from '../components/LinkToContact';
import styled from 'styled-components';

const StyledFood = styled.div`
  margin-bottom: 64px;

  .text-wrapper {
    margin: 0 16px;
    margin-bottom: 46px;

    h1 {
      margin-bottom: 32px;
      line-height: 32px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    .text-wrapper {
      width: 636px;
      h1 {
        margin-bottom: 32px;
        line-height: 32px;
      }

      div {
        p:first-child {
          margin-bottom: 28px;
        }
        margin-bottom: 16px;
      }
    }
  }
`;

const Food = ({ content }) => {
  const heroImage = content.hero;
  const heroIcon = content.hero.heroImage.heroIcon;
  const imageGrid = content.imageGrid;
  return (
    <Layout pageTitle={content.header}>
      <StyledFood>
        {content && (
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
          ></Hero>
        )}
        <div className="text-wrapper">
          <h1>{content.header}</h1>
          <PortableText blocks={content.description} />
        </div>
        <LinkToContact></LinkToContact>
        <ImageGrid images={imageGrid}></ImageGrid>
      </StyledFood>
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
