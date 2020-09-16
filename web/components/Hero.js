import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;

  .hero-image {
    width: 100%;
    height: calc(100vh - 128px);
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
    padding-top: 64px;
  }

  .hero-icon-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero-icon {
    z-index: 2;
    filter: drop-shadow(0px 4px 51px #ffffff);
  }

  .hero-icon img {
    width: auto;
    height: auto;
  }
`;

const Hero = ({ heroImage, heroImageAlt, heroIcon, heroIconAlt }) => {
  return (
    <StyledHero>
      <img
        className="hero-image"
        src={urlBuild(heroImage.heroImage.asset)}
        alt={heroImageAlt}
      ></img>
      <div className="hero-icon-wrapper">
        <div className="hero-icon">
          <img src={urlBuild(heroIcon.asset)} alt={heroIconAlt}></img>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
