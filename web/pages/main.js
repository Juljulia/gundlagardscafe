import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

import client from '../client';
import '../styles/sass/style.scss';
import IconLink from '../components/Iconlink';
import Hero from '../components/Hero';

const builder = imageUrlBuilder(client);

const Main = ({ header, heroImage, iconLink, imageGrid }) => {
  return (
    <div>
      {heroImage && (
        <Hero
          alt={heroImage.alt}
          image={builder.image(heroImage.asset).url()}
          icon={builder.image(heroImage.icon).url()}
        />
      )}
      {/* <div>
        {iconLink &&
          iconLink.map((icon, i) => (
            <IconLink
              key={i}
              slug={icon.links.link}
              icon={builder.image(icon.image.asset).url()}
            />
          ))}
      </div>

      <div>
        {imageGrid &&
          imageGrid.map((image, i) => (
            <img key={i} src={builder.image(image.image.asset).url()}></img>
          ))}
      </div> */}
    </div>
  );
};

const query = groq`*[_type == 'main'][0]{
    header,
    heroImage,
    iconLink,
    imageGrid
  }`;

Main.getInitialProps = async function () {
  return await client.fetch(query);
};

export default Main;
