import Link from 'next/link';
import styled from 'styled-components';
import 'lazysizes';

const Footer = () => (
  <StyledFooter>
    <div className="contact-info mobile">
      <div className="logo">
        <img data-src="/gundla-footer.png" className="lazyload"></img>
      </div>
      <div className="contact-info__content">
        <p>Kontaktinfo:</p>
        <p>Samantha Larsen</p>
        <a className="mail-to" href="gundlagardscafe@gmail.com">
          gundlagardscafe@gmail.com
        </a>
        <p className="phone-number">Mobil: 0708 84 07 17 </p>
      </div>
    </div>
    <div className="adress mobile">
      <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
    </div>

    <div className="desktop">
      <img data-src="/gundla-footer.png" className="lazyload"></img>
    </div>
    <div className="desktop">
      <p>Kontaktinfo:</p>
      <p>Samantha Larsen</p>
      <a className="mail-to" href="gundlagardscafe@gmail.com">
        gundlagardscafe@gmail.com
      </a>
      <p className="phone-number">mobil: 0708 84 07 17 </p>
      <p className="post-adress">Adress: Gundla mosse 32, 412 76 Göteborg</p>
    </div>

    <div className="link">
      <Link href="/hitta-hit#oppettider">
        <a className="link__item">Öppettider</a>
      </Link>
      <Link href="/fragor-svar#fs">
        <a className="link__item">Frågor och svar</a>
      </Link>
    </div>
    <div className="social" id="contact">
      <h3>Följ oss!</h3>
      <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
        <img data-src="/fb-light.png" className="lazyload"></img>
      </a>
      <a
        href="https://www.instagram.com/gundlagardscafe/?__a=2"
        target="_blank"
      >
        <img data-src="insta-light.png" className="lazyload"></img>
      </a>
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  .lazyload,
.lazyloading {
    opacity: 0;
}
.lazyloaded {
    opacity: 1;
    transition: opacity 1000ms;
}

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }

  .adress {
    justify-content: center;
  }

  .link {
    width: 100%;
  }

  .link p {
    padding-bottom: 24px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
  }

  .link__item {
    font-weight: normal;
    margin-bottom: 16px;
  }

  .link__item:hover {
    text-decoration: underline;
  }

  .logo {
    margin-right: 16px;
  }

  .contact-info {
    padding: 53px 0 32px 0;
    margin: 0 16px;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 27px 0;
  }

  .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 49px;
  }

  .social img {
    padding-left: 8px;
  }

  .social h3 {
    padding-right: 16px;
  }

  .phone-number{
    margin-top: 8px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 61px;
    padding-bottom: 100px;

    .link {
      align-items: flex-start;
      margin: 0;
      width: auto;
    }

    .social {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0;
    }

    .post-adress {
      margin-top: 24px;
    }

    .link p {
      padding-bottom: 0px;
    }

    .link__item {
      margin-bottom: 0px;
      margin-top: 16px;
    }

    .logo {
      margin-right: 0;
    }

    .contact-info {
      padding: 0;
      margin: 0 0px;
    }

    .link {
      margin: 0px 0;
    }

    .social {
      margin-bottom: 0px;
    }

    .social img {
      padding-left: 8px;
    }

    .social h3 {
      padding-right: 32px;
    }

    .mobile {
      display: none;
    }

    .desktop {
      display: block;

      p {
        margin-bottom: 8px;
      }

≈
    }
  }
`;

export default Footer;
