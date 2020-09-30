import groq from 'groq';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import client from '../functions/client';
import Layout from '../components/Layout';
import urlBuild from '../functions/imageBuilder';
import StyledLink from '../components/StyledLink';
import { hrefBuild, nameBuild } from '../functions/link';
import IconLinks from '../components/IconLinks';
import ImageGrid from '../components/ImageGrid';
import InstaGrid from '../components/InstaGrid';
import 'lazysizes';

export default function Home({ content }) {
  const [instaData, setInstaData] = React.useState('');
  React.useEffect(() => {
    fetch('https://www.instagram.com/gundlagardscafe/?__a=1')
      .then((resp) => resp.json())
      .then((json) => setInstaData(json));
  }, [0]);
  let instaGrid = [];
  if (instaData) {
    instaGrid = instaData.graphql.user.edge_owner_to_timeline_media.edges;
  }

  const imageGrid = content.imageGrid;
  const link = content.homePageLink.link.split(',');
  const name = nameBuild(link);
  const href = hrefBuild(link);
  const heroImage = urlBuild(content.hero.heroImage.asset);
  const iconLinks = content.iconLink;

  return (
    <Layout pageTitle="Hem">
      <Container>
        {heroImage && (
          <div className="hero">
            <img
              data-src={heroImage + '?h=656'}
              className="lazyload"
              alt={heroImage.alt}
            ></img>
            <div className="hero__content">
              <img
                data-src="g_logo_light.svg"
                className="lazyload logo-home"
                alt="Logga"
              ></img>
              <PortableText blocks={content.welcome} className="hero__title" />
              <StyledLink href={href} className="hero__link">
                {name}
              </StyledLink>
            </div>
          </div>
        )}
        <div className="desktop-iconlinks">
          <IconLinks icons={iconLinks}></IconLinks>
        </div>
        <ImageGrid images={imageGrid}></ImageGrid>
        <section id="about" className="article-first-parent">
          <article className="article-first">
            <h2>{content.aboutUs.header}</h2>
            <PortableText blocks={content.aboutUs.text} />
            {/* <p>{content.aboutUs.text}</p> */}
          </article>
          <article className="article-second">
            <div className="article-second__content">
              <h2>{content.history.header}</h2>
              <PortableText blocks={content.history.text} />
            </div>
            <img
              data-src={urlBuild(content.history.image.asset) + '?h=533'}
              alt={content.history.image.alt}
              className="lazyload"
            ></img>
          </article>
        </section>
        <InstaGrid images={instaGrid} className="insta-grid" />
      </Container>
    </Layout>
  );
}

const query = groq`*[_type == 'main'][0]{
    aboutUs,
    hero,
    history,
    homePageLink,
    iconLink,
    imageGrid,
    welcome,
  }`;

export async function getServerSideProps() {
  const content = await client.fetch(query);
  return {
    props: {
      content,
    },
  };
}

const Container = styled.section`
  .hero__content img {
    display: none;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100vh;
    margin-top: 64px;
  }
  .hero > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
  }
  .hero__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .hero__title {
    line-height: 55px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: 0 48px 32px 48px;
  }

  .article-first {
    padding: 64px 16px;
  }

  .article-first h2 {
    margin-bottom: 32px;
  }

  .article-second {
    display: flex;
    flex-direction: column-reverse;
    background-color: ${({ theme }) => theme.colors.background};
    margin-bottom: 64px;
  }

  .article-second img {
    height: 261px;
    object-fit: cover;
  }

  .article-second__content {
    padding: 64px 16px;
  }

  .article-second__content h2 {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 959px) {
    .hero__content img {
      display: block;
      margin-bottom: 32px;
    }
    .article-first-parent {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .article-first {
      width: 636px;
      padding-top: 16px;
    }

    .article-second {
      max-height: calc(100vh - 128px);
      flex-direction: row-reverse;
    }

    .article-second__content {
      width: 50%;
      padding-right: 72px;
      padding-left: 24px;
      max-height: 624px;
    }

    .article-second img {
      width: 50%;
      height: auto;
    }

    .desktop-iconlinks {
      margin: 0 80px;
    }

    .logo-home {
      width: 146px;
      height: 162px;
    }
  }
`;
