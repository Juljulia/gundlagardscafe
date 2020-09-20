import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { hrefBuild, nameBuild, linkBuild } from '../functions/link';
import urlBuild from '../functions/imageBuilder';

export default function IconLinks({ icons }) {
  return (
    <Container>
      {icons.map((icon, i) => (
        <div className="icon-link" key={i}>
          <div className="icon-link__container">
            <Link href={hrefBuild(linkBuild(icon.links.link))}>
              <img src={urlBuild(icon.image.asset)}></img>
            </Link>
            <h3>{nameBuild(linkBuild(icon.links.link))}</h3>
          </div>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;

  &:hover {
    cursor: pointer;
  }

  .icon-link__container {
    /* border: 1px solid red; */
    min-width: 150px;
    padding-bottom: 64px;
  }

  .icon-link__container img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: auto;
  }

  .icon-link__container h3 {
    padding-top: 8px;
    text-align: center;
  }

  .icon-link:nth-child(4) .icon-link__container h3 {
    margin-top: 20px;
  }

  @media only screen and (min-width: 768px) {
    .icon-link__container h3 {
      padding-top: 38px;
    }
    .icon-link:nth-child(3) .icon-link__container h3 {
      padding-top: 30px;
    }
    .icon-link:nth-child(4) .icon-link__container h3 {
      padding-top: 30px;
    }
  }
`;
