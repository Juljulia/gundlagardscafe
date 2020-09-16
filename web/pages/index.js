import groq from 'groq';
import client from '../functions/client';
import styled from 'styled-components';
import Layout from '../components/Layout';
import urlBuild from '../functions/imageBuilder';
import StyledLink from '../components/StyledLink';
import { hrefBuild, nameBuild } from '../functions/link';
import IconLinks from '../components/IconLinks';
import ImageGrid from '../components/ImageGrid';
import InstaGrid from '../components/InstaGrid';

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
    <Layout pageTitle={content.header}>
      <Container>
        {heroImage && (
          <div className="hero">
            <img src={heroImage}></img>
            <div className="hero__content">
              <h1 className="hero__title">{content.welcome}</h1>
              <StyledLink href={href} className="hero__link">
                {name}
              </StyledLink>
            </div>
          </div>
        )}
        <IconLinks icons={iconLinks}></IconLinks>
        <ImageGrid images={imageGrid}></ImageGrid>
        <section>
          <article className="article-first">
            <h2>{content.aboutUs.header}</h2>
            <p>{content.aboutUs.text}</p>
          </article>
          <article className="article-second">
            <div className="article-second__content">
              <h2>{content.history.header}</h2>
              <p>{content.history.text}</p>
            </div>
            <img src={urlBuild(content.history.image.asset)}></img>
          </article>
        </section>
        <InstaGrid images={instaGrid} className="insta-grid" />
      </Container>
    </Layout>
  );
}

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

export async function getServerSideProps() {
  const content = await client.fetch(query);

  // const res = await fetch('https://www.instagram.com/gundlagardscafe/?__a=1');
  // const json = await res.json();

  return {
    props: {
      content,
      // instaPictures: json.graphql.user.edge_owner_to_timeline_media.edges,
    },
  };
}

const Container = styled.section`
  .hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 64px);
  }
  .hero img {
    width: 100%;
    height: calc(100vh - 64px);
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
  }
  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .hero__title {
    line-height: 55px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 0 48px 32px 48px;
  }

  .article-first {
    padding: 48px 16px 64px 16px;
  }

  .article-first h2 {
    padding-bottom: 32px;
  }

  .article-second {
    display: flex;
    flex-direction: column-reverse;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .article-second img {
    object-fit: cover;
  }

  .article-second__content {
    padding: 64px 16px;
  }

  .article-second__content h2 {
    padding-bottom: 32px;
  }
`;
