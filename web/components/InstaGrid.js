import styled from 'styled-components';
import 'lazysizes';

const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 30;
  width: 100%;
  margin-bottom: 64px;

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
    width: 636px;
    transition: 0.1s transform ease-in-out;
    margin: 0 auto 64px auto;

    &:hover {
      transform: scale(1.03);
    }

    .wrapper {
      padding-right: 8px;
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
            <img
              key={i}
              data-src={image.node.display_url}
              className="lazyload"
              alt="Instagrambild"
            ></img>
          </a>
        ))}
    </StyledGrid>
  );
}
