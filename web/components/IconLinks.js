import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { hrefBuild, nameBuild, linkBuild } from '../functions/link';
import urlBuild from '../functions/imageBuilder';
import 'lazysizes';

export default function IconLinks({ icons }) {
  return (
    <Container>
      {icons.map((icon, i) => (
        <div className="icon-link" key={i}>
          <div className="icon-link__container">
            <Link href={hrefBuild(linkBuild(icon.links.link))}>
              <img
                data-src={urlBuild(icon.image.asset)}
                className="lazyload"
                alt={icon.image.heroIconAlt}
              ></img>
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

  h3 {
    font-weight: normal;
  }

  &:hover {
    cursor: pointer;
  }

  .icon-link__container {
    min-width: 135px;
    padding-bottom: 64px;
    transition: all 0.2s ease-in-out;
  }

  .icon-link__container:hover {
    cursor: pointer;
  }

  .icon-link__container:hover img {
    transform: scale(1.04);
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

  @media only screen and (min-width: 411px) {
    .icon-link__container {
      min-width: 185px;
    }
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
