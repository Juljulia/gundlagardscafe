import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import client from '../client';
import '../styles/sass/style.scss';

const builder = imageUrlBuilder(client);

const Main = ({ header, imageGrid }) => {
  return (
    <div>
      {header && <h1>{header}</h1>}
      <div>
        {imageGrid &&
          imageGrid.map((image, i) => (
            <img key={i} src={builder.image(image.image.asset).url()}></img>
          ))}
      </div>
    </div>
  );
};

const query = groq`*[_type == 'main'][0]{
    header,
    imageGrid
  }`;

Main.getInitialProps = async function () {
  return await client.fetch(query);
};

export default Main;
