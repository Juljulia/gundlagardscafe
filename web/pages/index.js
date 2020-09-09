import groq from 'groq';

import client from '../sanity/client';
import Hero from '../components/Hero';
import IconLink from '../components/Iconlink';
import Menu from '../components/Menu';
import urlBuild from '../sanity/imageBuilder';

const Index = ({ content, instagram }) => {
  const heroImage = urlBuild(content.heroImage.asset);
  const heroIcon = urlBuild(content.heroImage.icon);
  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;
  const instagramFeed =
    instagram.graphql.user.edge_owner_to_timeline_media.edges;
  const instaFour = instagramFeed.slice(0, 4);
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
      <div>
        {instaFour &&
          instaFour.map((image, i) => (
            <img key={i} src={image.node.display_url}></img>
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

export async function getStaticProps() {
  const content = await client.fetch(query);

  const res = await fetch('https://www.instagram.com/gundlagardscafe/?__a=1');
  const json = await res.json();

  return {
    props: {
      content,
      instagram: json,
    },
  };
}

export default Index;
