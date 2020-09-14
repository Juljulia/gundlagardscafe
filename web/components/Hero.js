import styled from 'styled-components';

const StyledHero = styled.div`
  /* height: 100%; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
  }
  .icon {
    height: auto;
    justify-content: flex-start;
    overflow: auto;
    max-width: 253px;
  }
`;

const Hero = ({ heroImage, heroImageAlt, heroIcon, heroIconAlt }) => {
  return (
    <StyledHero>
      <img src={heroImage} alt={heroImageAlt}></img>
      <div>
        <img className="icon" src={heroIcon} alt={heroIconAlt}></img>
      </div>
    </StyledHero>
  );
};

export default Hero;
