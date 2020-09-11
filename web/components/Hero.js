import styled from 'styled-components';

const StyledHero = styled.div`
  height: 90vh;
  width: 100%;
  img {
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
