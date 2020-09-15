import styled from 'styled-components';
import { useState } from 'react';

const StyledBookingForm = styled.div`
  padding-top: 48px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  background: rgba(149, 153, 103, 0.7);
  margin-top: 32px;

  label {
    font-size: 28px;
    line-height: 50px;
    font-weight: normal;
    color: white;
    font-family: Amatic SC;
  }

  input,
  textarea {
    font-weight: 300;
    font-size: 20px;
    line-height: 161.6%;
    border-radius: 9px;
    padding: 10px 16px;
    border: none;
    margin-bottom: 16px;
    width: calc(100% - 32px);
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 161.6%;
    /* or 32px */

    letter-spacing: 0.025em;

    color: #000000;
  }

  textarea {
    height: 274px;
    margin-bottom: 0px;
  }

  button {
    width: 163px;
    height: 43px;
    background: #cd8501;
    border-radius: 11px;
    filter: drop-shadow(4px 4px 6px rgba(209, 158, 63, 0.25));
    border: none;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #ffffff;
    float: right;
    margin-bottom: 119px;
    margin-top: 16px;
    box-shadow: none;
  }

  select {
    margin-left: 16px;
    border-radius: 9px;
    text-align: center;
    color: rgba(149, 153, 103, 0.8);
    border: none;
    background: white;
    width: 50px;
    height: 25px;
  }

  .select {
    display: flex;
    align-items: center;
  }
  .formMessage {
    position: fixed;
    top: -40px;
    z-index: 100;
    background-color: #cd8501;
    width: 100vw;
    margin-left: -16px;
    padding: 15px;
    text-align: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-50px);
    animation: slideDown 2.5s 0.5s 1 ease forwards;
  }
  p {
    color: white;
    font-weight: 300;
    font-size: 16px;
    font-weight: 300;
  }

  .error {
    background-color: #bd4101;
  }

  @keyframes slideDown {
    0%,
    100% {
      transform: translateY(-55px);
    }
    10%,
    90% {
      transform: translateY(40px);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 100vw;

    form {
      padding: 72px;
    }

    .inputWrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      div {
        width: 48%;
      }
    }
  }
`;

export default function BookingForm({ message }) {
  const [status, setStatus] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <StyledBookingForm>
      <form
        name="contact"
        action="https://formspree.io/xdopnegr"
        method="POST"
        onSubmit={sendEmail}
        id="bookingForm"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="inputWrapper">
          <div>
            <label htmlFor="yourname">Boka biljett till</label> <br />
            <input type="text" name="topic" id="topic" placeholder={message} />
          </div>
          <div>
            <label htmlFor="mail">Mailadress</label> <br />
            <input type="mail" name="topic" id="topic" />
          </div>
        </div>
        <div class="select">
          <label htmlFor="amout">Antal biljetter</label>
          <select name="amout" id="amout" form="amout">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="1">5</option>
            <option value="2">6</option>
            <option value="3">7</option>
            <option value="4">8</option>
          </select>
          <br />
        </div>
        <label htmlFor="yourmessage">Meddelande</label> <br />
        <textarea name="message" id="yourmessage" placeholder=""></textarea>
        <button type="submit">Boka</button>
        {status === 'SUCCESS' && (
          <div className="formMessage success">
            <p>Skickat!</p>
          </div>
        )}
        {status === 'ERROR' && (
          <div className="formMessage error">
            <p>Något gick fel, försökt igen!</p>
          </div>
        )}
      </form>
    </StyledBookingForm>
  );
}
