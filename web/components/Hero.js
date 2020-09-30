import styled from 'styled-components';
import urlBuild from '../functions/imageBuilder';
import 'lazysizes';

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  margin-top: 64px;
  max-height: 546px;

  .lazyload,
  .lazyloading {
    opacity: 0;
  }
  .lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    object-position: center;
    max-height: 546px;
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

  @media only screen and (min-width: 768px) {
    max-height: 672px;

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
        className="hero-image lazyload"
        data-src={urlBuild(heroImage.heroImage.asset) + '?h=672'}
        alt={heroImageAlt}
      ></img>
      <div className="hero-icon-wrapper">
        <div className="hero-icon">
          {heroIcon && (
            <img
              data-src={urlBuild(heroIcon.asset) + '?h=130'}
              alt={heroIconAlt}
              className="lazyload"
            ></img>
          )}
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
