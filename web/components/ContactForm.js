import styled from 'styled-components';

import { useState } from 'react';

const StyledBookingForm = styled.div`
  padding-top: 21px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 121px;
  background: #79655c;
  margin-top: 54px;
  margin-bottom: 64px;

  label {
    font-size: 40px;
    line-height: 200%;
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
    color: #000000;
  }

  textarea {
    height: 274px;
    margin-bottom: 0px;
  }

  button {
    width: 130px;
    height: 44px;
    background: #f6ff97;
    box-shadow: 0px 1px 4px rgba(80, 81, 71, 0.83);
    border: none;
    border-radius: 11px;
    font-family: Amatic SC;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #2b2928;
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
  .form-message {
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
    padding-bottom: 0;
    height: auto;
    margin-bottom: 34px;
    margin-top: 10px;

    .achor {
      position: absolute;
      margin: -30px;
      visibility: none;
    }

    form {
      padding: 24px 72px;

      button {
        margin-bottom: 24px;
        margin-top: 32px;
      }
    }

    label {
      line-height: 250%;
    }

    .input-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      div {
        width: 48%;
      }
    }
  }
`;

export default function ContactForm({ topic, message, id }) {
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
        id={id}
      >
        <input type="hidden" name="Contact-form" value="contact" />
        <div className="input-wrapper">
          <div>
            <label htmlFor="yourname">Ämne</label> <br />
            <input
              type="text"
              name="topic"
              id="topic"
              placeholder={topic}
              required
            />
          </div>
          <div>
            <label htmlFor="mail">Mailadress</label> <br />
            <input type="mail" name="mail" id="mail" />
          </div>
        </div>

        <br />
        <label htmlFor="yourmessage">Meddelande</label>
        <textarea
          name="message"
          id="yourmessage"
          placeholder={message}
          required
        ></textarea>
        <button type="submit">Skicka</button>
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
