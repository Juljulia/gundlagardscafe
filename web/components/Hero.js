import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  height: 90vh;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Hero = ({ image, icon, alt }) => (
  <StyledHero>
    <img src={image} alt={alt}></img>
    <img src={icon} className="icon"></img>
  </StyledHero>
);

export default Hero;
