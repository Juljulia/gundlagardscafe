import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  margin-top: 64px;

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
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

  .hero-arrow {
    object-fit: cover;
    text-align: center;
    width: 100%;
    z-index: 2;
    margin-bottom: 80px;
    animation: bounce 1.5s linear infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media only screen and (min-width: 768px) {
    max-height: 660px;

    .hero-image {
      width: 100%;
      height: 100%;
      max-height: 672px;
    }
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
      <div className="hero-arrow">
        <img src="/scroll-down.png"></img>
      </div>
    </StyledHero>
  );
};

export default Hero;
