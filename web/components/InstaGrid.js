import styled from 'styled-components';

const StyledGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .wrapper {
    width: calc(50% - 4px);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: drop-shadow(4px 7px 6px rgba(0, 0, 0, 0.25));
  }
  .wrapper:nth-child(1),
  .wrapper:nth-child(2) {
    padding-bottom: 8px;
  }
`;

export default function InstaGrid({ images }) {
  console.log(images);
  return (
    <StyledGrid>
      {images &&
        images.map((image, i) => (
          <div className="wrapper" key={i}>
            <img key={i} src={image.node.display_url}></img>
          </div>
        ))}
    </StyledGrid>
  );
}
