import groq from 'groq';
import Link from 'next/link';
import Layout from '../components/Layout';
import client from '../sanity/client';
import IconLink from '../components/Iconlink';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';

const Index = ({ content }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroIcon.asset);
  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;

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
      <section>
        <h1>{content.header}</h1>
        <div>
          {iconLinks &&
            iconLinks.map((icon, i) => (
              <IconLink
                key={i}
                slug={icon.links.link}
                icon={urlBuild(icon.image.asset)}
              />
            ))}
        </div>
        <div>
          {imageGrid &&
            imageGrid.map((image, i) => (
              <img key={i} src={urlBuild(image.image.asset)}></img>
            ))}
        </div>
      </section>
    </Layout>
  );
};

const query = groq`*[_type == 'main'][0]{
    header,
    hero,
    iconLink,
    imageGrid,
  }`;

export const getStaticProps = async () => {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
};

export default Index;
