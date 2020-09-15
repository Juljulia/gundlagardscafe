import groq from 'groq';
import styled from 'styled-components';

import client from '../functions/client';
import colors from '../styles/colors';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import IconLink from '../components/IconLink';
import ImageGrid from '../components/ImageGrid';
import StyledLink from '../components/StyledLink';
import urlBuild from '../functions/imageBuilder';
import { hrefBuild, nameBuild } from '../functions/link';

const Index = ({ content, instagram }) => {
  const heroImage = urlBuild(content.hero.heroImage.asset);

  const link = content.homePageLink.link.split(',');
  const name = nameBuild(link);
  const href = hrefBuild(link);

  const iconLinks = content.iconLink;
  const imageGrid = content.imageGrid;

  const instagramFeed =
    instagram.graphql.user.edge_owner_to_timeline_media.edges;
  const instaFour = instagramFeed.slice(0, 4);

  return (
    // <Layout pageTitle={content.header}>
    <Container>
      {heroImage && (
        <div className="hero">
          <Hero
            heroImage={heroImage}
            heroImageAlt={content.heroImageAlt}
            className="hero__image"
          />
          <div className="hero__content">
            <h1 className="hero__title">{content.welcome}</h1>
            <StyledLink href={href} className="hero__link">
              {name}
            </StyledLink>
          </div>
        </div>
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
        <div>
          {instaFour &&
            instaFour.map((image, i) => (
              <img key={i} src={image.node.display_url}></img>
            ))}
        </div>{' '}
        <div>
          <h4>{content.aboutUs.header}</h4>
          <p>{content.aboutUs.text}</p>
        </div>
        <div>
          <h4>{content.history.header}</h4>
          <p>{content.history.text}</p>
          <img src={urlBuild(content.history.image.asset)}></img>
        </div>
      </section>
    </Container>
    // </Layout>
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

const Container = styled.div`
  .hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh; /* keep it 90vh*/
  }
  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: 0 48px 0 48px; /*top 64px navmenu*/
  }
  .hero__title {
    font-size: 25px;
    line-height: 32px;
    color: ${colors.white};
    text-align: center;
    padding-bottom: 32px;
  }
`;

export default Index;
