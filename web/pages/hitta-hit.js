import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../sanity/client';

const builder = imageUrlBuilder(client);

const FindUs = ({
  hero,
  icon,
  header,
  subheading,
  description,
  availability,
}) => {
  return (
    <div>
      <img src={builder.image(hero.asset).url()} alt={hero.alt}></img>
      <img src={builder.image(icon.asset).url()} alt={icon.alt}></img>
      <h1>{header}</h1>
      <p>{subheading}</p>
      <p>{description}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7756947796547!2d12.02605491600651!3d57.68629018111437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1sen!2sse!4v1599492272828!5m2!1sen!2sse"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
