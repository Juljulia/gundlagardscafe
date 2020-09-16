import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  .logo {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #e5e5e5;
  }
  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }

  .adress-link {
    width: 100%;
  }

  .adress-link p {
    padding-bottom: 24px;
  }

  .adress-link a::nth-child(1) {
    padding-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    line-height: 25px;
    color: black;
  }

  .adress-link__item {
    font-weight: 500;
  }

  .adress-link__item:hover {
    text-decoration: underline;
  }

  .contact-info {
    padding: 64px 0 32px 24px;
    display: flex;
    flex-direction: row;
  }

  .contact-info__content {
    padding-left: 24px;
  }

  .adress-link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social {
    padding: 48px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social img {
    padding-left: 8px;
  }

  .social h3 {
    padding-right: 16px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="contact-info">
      <div className="logo"></div>
      <div className="contact-info__content">
        <p>Kontaktinfo:</p>
        <p>Samantha Larsen</p>
        <a className="mail-to" href="gundlagardscafe@gmail.com">
          gundlagardscafe@gmail.com
        </a>
        <p>Mobil: 0708 84 07 17 </p>
      </div>
    </div>
    <div className="adress-link">
      <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
      <Link href="/fragor-svar#fs">
        <a className="adress-link__item">Frågor och svar</a>
      </Link>
      <Link href="/hitta-hit#oppettider">
        <a className="adress-link__item">Öppettider</a>
      </Link>
    </div>
    <div className="social">
      <h3>FÖLJ OSS!</h3>
      <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
        <img src="/fb.png"></img>
      </a>
      <a
        href="https://www.instagram.com/gundlagardscafe/?__a=2"
        target="_blank"
      >
        <img src="insta.png"></img>
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
