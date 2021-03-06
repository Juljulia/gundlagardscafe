import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';
import 'lazysizes';

const StyledImageGrid = styled.div`
  width: 100vw;

  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .gridcontainter {
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10%;
    grid-template-rows: 40% 30% 30%;
    grid-gap: 8px;
    margin: 16px;
    padding: 0;
    height: 584px;
  }

  .object {
    width: 100%;
    height: 100%;
  }

  .gridImage {
    border-radius: 9px;
    border: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .object:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  .object:nth-child(2) {
    grid-column: 4 / 11;
    grid-row: 1/ 2;
  }

  .object:nth-child(3) {
    grid-column: 1 / 11;
    grid-row: 2/3;
  }

  .object:nth-child(4) {
    grid-column: 1 / 5;
    grid-row: 3;
  }

  .object:nth-child(5) {
    grid-column: 5 /11;
    grid-row: 3;
  }

  @media only screen and (min-width: 768px) {
    max-width: calc(100vw - 144px);
    margin: 0 72px;
    padding: 0;

    .gridcontainter {
      grid-template-columns: 18% 49% 33%;
      grid-template-rows: 15% 15% 15% 15% 15% 15%;
      height: 752px;
      margin: 0;
      padding: 0;
      grid-gap: 8px;
      width: calc(100% - 16px);
    }

    .object:nth-child(1) {
      grid-column: 1;
      grid-row: 1/5;
    }

    .object:nth-child(2) {
      grid-column: 1;
      grid-row: 5/ 7;
    }

    .object:nth-child(3) {
      grid-column: 2;
      grid-row: 1 / 7;
    }

    .object:nth-child(4) {
      grid-column: 3;
      grid-row: 1 / 3;
    }

    .object:nth-child(5) {
      grid-column: 3;
      grid-row: 3 / 7;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default function ImageGrid({ images }) {
  return (
    <StyledImageGrid>
      <div className="gridcontainter">
        {images &&
          images.map((image, i) => (
            <div className="object" key={i}>
              <img
                className="gridImage lazyload"
                key={i}
                data-src={urlBuild(image.image.asset)}
                alt={image.image.alt}
              ></img>
            </div>
          ))}
      </div>
    </StyledImageGrid>
  );
}
