import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { hrefBuild, nameBuild, linkBuild } from '../functions/link';
import urlBuild from '../functions/imageBuilder';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  padding-top: 64px;

  &:hover {
    cursor: pointer;
  }

  .container {
    min-width: 150px;
    padding-bottom: 64px;
  }

  .container img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: auto;
  }

  .container h3 {
    padding-top: 8px;
    text-align: center;
  }
`;

export default function IconLinks({ icons }) {
  return (
    <Container>
      {icons.map((icon, i) => (
        <div className="icon-link" key={i}>
          <div className="container">
            <Link href={hrefBuild(linkBuild(icon.links.link))}>
              <img className="iconLink" src={urlBuild(icon.image.asset)}></img>
            </Link>
            <h3>{nameBuild(linkBuild(icon.links.link))}</h3>
          </div>
        </div>
      ))}
    </Container>
  );
}
