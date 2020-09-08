import groq from 'groq';
import client from '../client';

const Event = ({ header }) => {
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};

const query = groq`*[_type == 'event'][0]{
    header,
  }`;

Event.getInitialProps = async function () {
  return await client.fetch(query);
};

export default Event;
