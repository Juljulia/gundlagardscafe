import React, { useState } from 'react';
import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';
import StackGrid, { transitions } from 'react-stack-grid';
import Link from 'next/link';
import { SizeMe } from 'react-sizeme';
import BookingForm from '../components/BookingForm';
import ImageGrid from '../components/ImageGrid';
import PortableText from '@sanity/block-content-to-react';

const { scaleDown } = transitions;

const StyledEventList = styled.div`
  .eventCard {
    margin: 16px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: -1px;
    height: 153px;
    width: 100%;
    object-fit: cover;
    border-radius: 9px 9px 0 0;
  }

  .text {
    padding: 32px 24px;

    div {
      margin: 24px 0 32px 0;

      p {
        line-height: 128.35%;
        padding: 0;
        margin: 0;
      }
    }
  }

  h3 {
    padding: 0;
    margin: 0;
    font-size: 33px;
    line-height: 36px;
  }

  p {
    font-size: 20px;
    line-height: 161.6%;
    letter-spacing: 0.025em;
  }

  button {
    background: linear-gradient(
        356.23deg,
        #fe9eb9 6.73%,
        rgba(254, 192, 210, 0.645833) 35.09%,
        rgba(255, 255, 255, 0) 124.16%
      ),
      #fef4ef;
    box-shadow: 2px 4px 4px #f33966;
    border-radius: 50px;
    border: none;
    width: 165px;
    height: 50px;
    margin-bottom: 35px;
  }
`;

const EventList = ({ event, grid }) => {
  const [topic, setState] = useState('Ex. Frukost Yoga');
  return (
    <StyledEventList>
      {event &&
        event.map((object) => (
          <div key={object._key} className="eventCard">
            <img src={urlBuild(object.image.asset)}></img>
            <div className="text">
              <h3>{object.header}</h3>
              {object.price && <p className="price">{object.price} kr</p>}
              <PortableText blocks={object.description} />
            </div>
            {object.price && (
              <Link href={'#bookingForm'}>
                <button
                  className="eventBtn"
                  data-mssg={object.header}
                  onClick={() => setState(object.header)}
                >
                  Boka
                </button>
              </Link>
            )}
            <style jsx>{`
              .eventCard {
                background: ${object.category};
              }
            `}</style>
          </div>
        ))}
      <ImageGrid images={grid}></ImageGrid>
      <BookingForm message={topic}></BookingForm>
    </StyledEventList>
  );
};

export default EventList;
