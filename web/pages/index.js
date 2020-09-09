import groq from 'groq';
import Link from 'next/link';
import Layout from '../components/Layout';
import client from '../sanity/client';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import Menu from '../components/Menu';
import IconLink from '../components/Iconlink';

const Index = ({ content, instagram }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroImage.icon);
  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;
  const instagramFeed =
    instagram.graphql.user.edge_owner_to_timeline_media.edges;
  const instaFour = instagramFeed.slice(0, 4);
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
        <div>
          {instaFour &&
            instaFour.map((image, i) => (
              <img key={i} src={image.node.display_url}></img>
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
