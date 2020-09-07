import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import '../styles/sass/style.scss';
import GoogleMapReact from 'google-map-react';

const builder = imageUrlBuilder(client);
const GMAPS_API_KEY = 'AIzaSyAg2P6hIKXKXhHKSP5lnNaqcdtsG9oXu8Y';

export const location = [{ id: 0, lat: 38.9095, lng: -77.0469 }];

const FindUs = (props) => {
  const { hero, icon, header, subheading, description, availability } = props;
  console.log(hero);
  return (
    <div>
      <img src={builder.image(hero.asset).url()} alt={hero.alt}></img>
      <img src={builder.image(icon.asset).url()} alt={icon.alt}></img>
      <h1>{header}</h1>
      <p>{subheading}</p>
      <p>{description}</p>
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GMAPS_API_KEY }}
          defaultCenter={{ lat: 57.686324, lng: 12.028271 }}
          defaultZoom={15}
        ></GoogleMapReact>
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </div>
      {availability.map((object) => (
        <div key={object._key}>
          <img
            src={builder.image(object.image.asset).url()}
            alt={object.image.alt}
          ></img>
          <h3>{object.header}</h3>
          <p>{object.description}</p>
        </div>
      ))}
    </div>
  );
};

const query = groq`*[_type == 'find-us'][0]{
    hero,
    icon,
    header,
    subheading,
    description,
    availability
  }`;

FindUs.getInitialProps = async function () {
  return await client.fetch(query);
};

export default FindUs;
