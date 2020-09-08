import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import ContactForm from '../components/ContactForm';

const builder = imageUrlBuilder(client);

const Qa = ({ hero, icon, header, questionAndAnswer }) => {
  return (
    <div>
      <img src={builder.image(hero.asset).url()} alt={hero.alt}></img>
      <img src={builder.image(icon.asset).url()} alt={icon.alt}></img>
      <h1>{header}</h1>
      <div>
        {questionAndAnswer.map((object) => (
          <div key={object._key}>
            <h3>{object.question}</h3>
            <p>{object.answer}</p>
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

const query = groq`*[_type == 'qa'][0]{
    hero,
    icon,
    header,
    questionAndAnswer
  }`;

Qa.getInitialProps = async function () {
  return await client.fetch(query);
};

export default Qa;
