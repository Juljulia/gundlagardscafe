import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledWrapper = styled.div;

const IconLink = ({ slug, icon }) => (
  <Link href={slug}>
    <img src={icon}></img>
  </Link>
);

export default IconLink;
