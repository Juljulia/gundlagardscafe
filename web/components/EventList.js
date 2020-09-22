import React, { useState } from 'react';
import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';
import StackGrid, { transitions } from 'react-stack-grid';
import Link from 'next/link';
import { SizeMe } from 'react-sizeme';
import BookingForm from '../components/BookingForm';
import ImageGrid from '../components/ImageGrid';
import PortableText from '@sanity/block-content-to-react';
import 'lazysizes';

const { scaleDown } = transitions;

const StyledEventList = styled.div`
  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
  }
  .event-card {
    margin: 16px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 153px;
      width: 100%;
      object-fit: cover;
      border-radius: 9px 9px 0 0;
    }

    .text {
      padding: 32px 24px;

      h2 {
        font-size: 33px;
        line-height: 36px;
        font-weight: normal;
        font-family: IBM Plex Sans;
        margin-bottom: 16px;
      }

      .price {
        margin-top: -8px;
        margin-bottom: 16px;
        font-size: 20px;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
      }

      div {
        margin: 0;
        padding: 0;

        p {
          font-size: 20px;
          line-height: 161.6%;
          letter-spacing: 0.025em;
          padding: 0;
        }
      }
    }
    button {
      background: #ffdae3;
      box-shadow: 0px 4px 6px #f24a72;
      border-radius: 11px;
      border: none;
      width: 165px;
      height: 50px;
      margin-bottom: 35px;
      font-family: Amatic SC;
      font-size: 24px;
    }
  }

  .wrapper-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    margin-top: 48px;
    margin-bottom: calc(48px + 24px);
  }

  .more {
    background-color: white;
    border: white;
    box-shadow: none;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 109.6%;
    color: #2b2928;
    padding: 0;
    margin-bottom: 8px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 56px;
    margin-top: 8px;
    width: calc(100vw - 112px);

    .event-wrapper {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: minmax(150px, auto);
      grid-auto-flow: dense;
      cursor: pointer;

      .text {
        width: calc(100% - 48px);
        padding: 24px;
      }

      button {
        margin-top: 8px;
        margin-bottom: 32px;
      }
    }
  }
`;

const EventList = ({ event, grid }) => {
  const [topic, setState] = useState('');
  const [status, setStatus] = useState('6');

  return (
    <StyledEventList>
      <div className="event-wrapper">
        {event &&
          event.slice(0, status).map((object) => (
            <div key={object._key} className="event-card">
              <img
                data-src={urlBuild(object.image.asset)}
                className="lazyload"
              ></img>
              <div className="text">
                <h2>{object.header}</h2>
                {object.price && <p className="price">{object.price} kr</p>}
                <PortableText
                  className="event-description"
                  blocks={object.description}
                />
              </div>
              {object.price && (
                <Link href={'#booking-form'}>
                  <button
                    className="event-btn"
                    data-mssg={object.header}
                    onClick={() => setState(object.header)}
                  >
                    Boka
                  </button>
                </Link>
              )}
              <style jsx>{`
                .event-card {
                  background: ${object.category};
                }
              `}</style>
            </div>
          ))}
      </div>
      {status != 500 && (
        <div className="wrapper-more" onClick={() => setStatus(500)}>
          <button className="more">Se fler event</button>
          <img data-src="arrow.png" className="lazyload"></img>
        </div>
      )}
      <ImageGrid images={grid}></ImageGrid>
      <BookingForm message={topic}></BookingForm>
    </StyledEventList>
  );
};

export default EventList;
