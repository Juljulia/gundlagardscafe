import styled from 'styled-components';

import { useState } from 'react';

const StyledContactForm = styled.div`
  padding-top: 8px;
  padding-bottom: 121px;
  background: #79655c;
  margin-top: 54px;
  margin-bottom: 64px;
  width: 100vw;

  form {
    margin: 16px;
    width: calc(100vw - 32px);
  }

  label {
    font-size: 40px;
    line-height: 200%;
    color: white;
    font-family: Amatic SC;
  }

  .input-wrapper {
    width: 80%;
    margin-bottom: -16px;
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
    color: #000000;
    width: calc(100% - 32px);
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
    margin-top: 46px;
    box-shadow: none;
  }

  button:hover {
    box-shadow: inset -1px -2px 4px rgba(80, 81, 71, 0.47);
    border-radius: 11px;
  }

  .button:active {
    box-shadow: inset -1px 4px 5px rgba(124, 126, 105, 0.65);
    border-radius: 11px;
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
    left: 0;
    z-index: 100;
    background-color: #cd8501;
    width: calc(100vw);
    padding: 15px 0;
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
    margin-bottom: 34px;
    margin-top: 0px;
    height: 700px;

    .achor {
      position: absolute;
      margin: -30px 0;
      visibility: none;
    }

    form {
      padding: 24px 72px;
      padding-top: 0;
      width: calc(100% - 144px);
      margin: 0;

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
    <StyledContactForm>
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
            <input
              type="mail"
              name="mail"
              id="mail"
              placeholder="namn@mailadress.com"
              required
            />
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
          <div className="form-message success">
            <p>Skickat!</p>
          </div>
        )}
        {status === 'ERROR' && (
          <div className="form-message error">
            <p>Något gick fel, försökt igen!</p>
          </div>
        )}
      </form>
    </StyledContactForm>
  );
}
