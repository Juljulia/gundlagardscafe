import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  height: 90vh;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

const Hero = ({ image, icon, alt }) => {
  return (
    <StyledHero>
      <img src={image} alt={alt}></img>
      <div>
        <img src={icon}></img>
      </div>
    </StyledHero>
  );
};

export default Hero;
