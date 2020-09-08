import groq from 'groq';
import client from '../client';

const Food = ({ header = '', image = '', alt = '', description = '' }) => {
  return (
    <div>
      <h1>{header}</h1>
      <img src={image} alt={alt}></img>
      <p>{description}</p>
    </div>
  );
};

const query = groq`*[_type == 'food'][0]{
    header,
    "image": image.asset->url,
    alt,
    description
  }`;

Food.getInitialProps = async function () {
  return await client.fetch(query);
};

export default Food;
