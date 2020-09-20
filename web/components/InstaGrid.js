import styled from 'styled-components';

const StyledGrid = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 64px;
  z-index: 30;

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

  @media only screen and (min-width: 768px) {
    justify-content: center;
    flex-wrap: nowrap;

    .wrapper {
      width: 185px;
    }
    .wrapper:nth-child(1),
    .wrapper:nth-child(2) {
      padding-bottom: 0;
    }
  }
`;

export default function InstaGrid(props) {
  let instaFour = props.images.slice(0, 4);
  return (
    <StyledGrid>
      {instaFour &&
        instaFour.map((image, i) => (
          <a
            className="wrapper"
            href="https://www.instagram.com/gundlagardscafe/"
            target="_blank"
            key={i}
          >
            <img key={i} src={image.node.display_url}></img>
          </a>
        ))}
    </StyledGrid>
  );
}
