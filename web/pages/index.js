import groq from 'groq';
import Layout from '../components/Layout';
import client from '../sanity/client';
import Hero from '../components/Hero';
import urlBuild from '../sanity/imageBuilder';
import IconLink from '../components/IconLink';
import ImageGrid from '../components/ImageGrid';
import StyledLink from '../components/StyledLink';
import { linkBuild, titleBuild } from '../functions/link';

const Index = ({ content, instagram }) => {
  console.log(content);
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const heroIcon = urlBuild(content.hero.heroImage.heroIcon.asset);

  const homePageLink = content.homePageLink.link.split(',');
  const name = titleBuild(homePageLink);
  const href = linkBuild(homePageLink);

  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;

  const instagramFeed =
    instagram.graphql.user.edge_owner_to_timeline_media.edges;
  const instaFour = instagramFeed.slice(0, 4);

  return (
    <Layout pageTitle={content.header}>
      {content && (
        <>
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            heroIcon={heroIcon}
            heroIconAlt={content.heroIconAlt}
            className="heroFirstPage"
          />
          <StyledLink href={href} className="link-firstpage">
            {name}
          </StyledLink>
        </>
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
        <ImageGrid images={imageGrid}></ImageGrid>
        {/* <div>
          {instaFour &&
            instaFour.map((image, i) => (
              <img key={i} src={image.node.display_url}></img>
            ))}
        </div>{' '} */}
        {/* <div>
          <h4>{content.aboutUs.header}</h4>
          <p>{content.aboutUs.text}</p>
        </div>
        <div>
          <h4>{content.history.header}</h4>
          <p>{content.history.text}</p>
          <img src={urlBuild(content.history.image.asset)}></img>
        </div> */}
      </section>
    </Layout>
  );
};

const query = groq`*[_type == 'main'][0]{
    aboutUs,
    header,
    hero,
    history,
    homePageLink,
    iconLink,
    imageGrid,
    welcome,
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
