import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter id="contact">
    <div className="contact-info">
      <div className="logo">
        <img src="/gundla-footer.png"></img>
      </div>
      <div className="contact-info__content">
        <p>Kontaktinfo:</p>
        <p>Samantha Larsen</p>
        <a className="mail-to" href="gundlagardscafe@gmail.com">
          gundlagardscafe@gmail.com
        </a>
        <p>Mobil: 0708 84 07 17 </p>
      </div>
      <p>Adress: Gundla mosse 32, 412 76 Göteborg</p>
    </div>
    <div className="adress"></div>
    <div className="link">
      <Link href="/hitta-hit#oppettider">
        <a className="link__item">Öppettider</a>
      </Link>
      <Link href="/fragor-svar#fs">
        <a className="link__item">Frågor och svar</a>
      </Link>
    </div>
    <div className="social">
      <h3>Följ oss!</h3>
      <a href="https://www.facebook.com/gundlagardscafe/" target="_blank">
        <img src="/fb-light.png"></img>
      </a>
      <a
        href="https://www.instagram.com/gundlagardscafe/?__a=2"
        target="_blank"
      >
        <img src="insta-light.png"></img>
      </a>
    </div>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  p {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 25px;
  }

  .adress {
    text-align: center;
    width: 100%;
  }

  .link {
    width: 100%;
  }

  .link p {
    padding-bottom: 24px;
  }

  .link a::nth-child(1) {
    padding-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    line-height: 25px;
  }

  .link__item {
    font-weight: normal;
  }

  .link__item:hover {
    text-decoration: underline;
  }

  .logo {
    border: 1px solid blue;
  }

  .contact-info {
    border: 1px solid green;
    padding: 32px 0;
    display: flex;
    flex-direction: row;
  }

  .link {
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

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Footer;
