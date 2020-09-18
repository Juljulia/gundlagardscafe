import styled from 'styled-components';
import Link from 'next/link';

const StyledLinkToContact = styled.header`
  .linkToContact {
    height: 216px;
    background: #fecfb1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 51px;

    p {
      text-align: center;
      font-weight: 300;
      font-size: 16px;
      line-height: 161.1%;
      letter-spacing: 0.025em;
      color: #2b2928;
      margin: 16px 16px;
    }

    button {
      width: 150px;
      height: 43px;
      filter: drop-shadow(0px 4px 6px rgba(205, 133, 1, 0.25));
      background: #cd8501;
      border-radius: 11px;
      font-size: 25px;
      color: #ffffff;
      border: none;
      font-family: Amatic SC;
      line-height: 32px;
    }

    button:hover {
      box-shadow: inset -1px -1px 6px rgba(141, 93, 4, 0.73);
      border-radius: 11px;
    }

    button:active {
      box-shadow: inset -1px 4px 6px #ae7204;
      border-radius: 11px;
    }
  }
  @media only screen and (min-width: 768px) {
    .linkToContact {
      width: 100vw;
      p {
        font-size: 20px;
        margin-bottom: 19px;
      }

      button {
      }
    }
  }
`;

const LinkToContact = () => {
  return (
    <StyledLinkToContact>
      <div className="linkToContact">
        <p>Skicka gärna en förfrågan så kan vi se hur vi kan hjälpa er.</p>
        <Link href="/privata-event#event-form">
          <button>Förfrågan</button>
        </Link>
      </div>
    </StyledLinkToContact>
  );
};

export default LinkToContact;
