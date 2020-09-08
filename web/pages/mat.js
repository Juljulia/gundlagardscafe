import groq from 'groq';
import client from '../sanity/client';

const Food = ({ food }) => {
  return (
    <div>
      <h1>{food.header}</h1>
      <img src={food.image} alt={food.alt}></img>
      <p>{food.description}</p>
    </div>
  );
};

const query = groq`*[_type == 'food'][0]{
    header,
    "image": image.asset->url,
    alt,
    description
  }`;

export const getStaticProps = async () => {
  const food = await client.fetch(query);
  return {
    props: {
      food,
    },
  };
};

export default Food;
