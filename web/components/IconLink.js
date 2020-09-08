import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import colors from '../config/colors';

const StyledWrapper = styled.div;

const IconLink = ({ slug, icon }) => (
  <Link href={slug}>
    <img src={icon}></img>
  </Link>
);

export default IconLink;
