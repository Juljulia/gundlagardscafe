import styled from 'styled-components';

const StyledHero = styled.div`
  height: 95vh;
  width: 100vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = ({ heroImage, heroImageAlt, heroIcon, heroIconAlt }) => {
  return (
    <StyledHero>
      <img src={heroImage} alt={heroImageAlt}></img>
      <div>
        <img src={heroIcon} alt={heroIconAlt}></img>
      </div>
    </StyledHero>
  );
};

export default Hero;
