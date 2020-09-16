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

  h2 {
    padding: 0;
    margin: 0;
    font-size: 33px;
    line-height: 36px;
    font-weight: normal;
    font-family: IBM Plex Sans;
  }

  p {
    font-size: 20px;
    line-height: 161.6%;
    letter-spacing: 0.025em;
  }

  .price {
    margin: 0;
    margin-top: 8px;
    font-size: 20px;
  }

  button {
    background: #ffdae3;
    box-shadow: 0px 4px 6px #f24a72;
    border-radius: 11px;
    border: none;
    width: 165px;
    height: 50px;
    margin-bottom: 35px;
    color: #2a2928;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }

  .wrapperMore {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
  }

  .more {
    background-color: white;
    border: white;
    box-shadow: none;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    padding: 0;
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 56px;

    .eventWrapper {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: auto;
    }

    .eventCard {
    }
  }
`;

const EventList = ({ event, grid }) => {
  const [topic, setState] = useState('');
  const [status, setStatus] = useState('3');
  console.log(event);
  return (
    <StyledEventList>
      <div className="eventWrapper">
        {event &&
          event.slice(0, status).map((object) => (
            <div key={object._key} className="eventCard">
              <img src={urlBuild(object.image.asset)}></img>
              <div className="text">
                <h2>{object.header}</h2>
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
      </div>
      {status != 500 && (
        <div className="wrapperMore" onClick={() => setStatus(500)}>
          <button className="more">Se fler event</button>
          <div>v</div>
        </div>
      )}
      <ImageGrid images={grid}></ImageGrid>
      <BookingForm message={topic}></BookingForm>
    </StyledEventList>
  );
};

export default EventList;
