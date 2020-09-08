import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import Layout from '../components/Layout';

const builder = imageUrlBuilder(client);

const Title = styled.h1`
  font-size: 50px;
`;

const Qa = ({ hero, icon, header, questionAndAnswer }) => {
  return (
    <Layout>
      <div>
        <img src={builder.image(hero.asset).url()} alt={hero.alt}></img>
        <img src={builder.image(icon.asset).url()} alt={icon.alt}></img>
        <Title>{header}</Title>
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
    </Layout>
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
