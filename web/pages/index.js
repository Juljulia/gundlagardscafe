import groq from 'groq';
import Link from 'next/link';

import client from '../sanity/client';
import IconLink from '../components/Iconlink';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import urlBuild from '../sanity/imageBuilder';

const Index = ({ content }) => {
  const heroImage = urlBuild(content.heroImage.asset);
  const heroIcon = urlBuild(content.heroImage.icon);
  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;

  return (
    <section>
      <h1>{content.header}</h1>
      <Menu />
      {content && (
        <Hero alt={content.heroImage.alt} image={heroImage} icon={heroIcon} />
      )}
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
  );
};

const query = groq`*[_type == 'main'][0]{
    header,
    heroImage,
    iconLink,
    imageGrid
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
