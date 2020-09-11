import styled from 'styled-components';
import urlBuild from '../sanity/imageBuilder';

const StyledGrid = styled.div`
  .gridcontainter {
    display: grid;
    grid-template-columns: 18% 45% 33%;
    grid-template-rows: 15% 15% 15% 15% 15% 15%;
    grid-gap: 8px;
    margin: 0 72px;
    padding: 0;
    max-height: 725px;
  }

  .object {
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 9px;
    border: none;
  }

  .object:nth-child(1) {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  .object:nth-child(2) {
    grid-column: 1;
    grid-row-start: 5;
    grid-row-end: 7;
  }

  .object:nth-child(3) {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 7;
  }

  .object:nth-child(4) {
    grid-column: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .object:nth-child(5) {
    grid-column: 3;
    grid-row-start: 3;
    grid-row-end: 7;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default function ImageGrid({ images }) {
  return (
    <StyledGrid>
      <div className="gridcontainter">
        {images &&
          images.map((image, i) => (
            <div className="object" key={i}>
              <img src={urlBuild(image.image.asset)}></img>
            </div>
          ))}
      </div>
    </StyledGrid>
  );
}
