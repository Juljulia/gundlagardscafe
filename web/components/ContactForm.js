import styled from 'styled-components';

import { useState } from 'react';

const StyledForm = styled.div`
  height: auto;
  background: #959967;
  overflow: auto;
  margin-top: 70px;
  margin-bottom: 64px;

  h4 {
    font-size: 33px;
    margin-bottom: 32px;
    padding-top: 16px;
    margin-top: 0;
    text-transform: uppercase;
  }

  form {
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 36px;
  }

  input,
  textarea {
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    line-height: 161.6%;
    border-radius: 9px;
    padding: 2.5px 10px;
    border: none;
    letter-spacing: 0.025em;
    color: #c4c4c4;
    margin: 4px 0;
  }

  input {
    width: 75%;
    margin-bottom: 16px;
  }

  label {
    font-size: 28px;
    line-height: 50px;
    font-weight: 400;
    color: #ffffff;
    font-family: Amatic SC;
  }

  textarea {
    height: 343.01px;
  }

  button {
    background: #cd8501;
    border-radius: 11px;
    width: 150px;
    height: 43px;
    color: white;
    filter: drop-shadow(4px 4px 6px rgba(209, 158, 63, 0.25));
    border: none;
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    float: right;
    margin: 20px 0;
  }

  .formMessage {
    position: fixed;
    top: -5px;
    z-index: 100;
    background-color: #CD8501;
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
      background-color: #BD4101;
    }
  }

  @keyframes slideDown {
    0%, 100% { transform: translateY(-55px); }
    10%, 90% { transform: translateY(0px); }
}

  @media only screen and (min-width: 768px) {
    margin-top: 0px;

    input {
      width: 50%;
      margin-bottom: 16px;
    }

    form {
      margin-left: 72px;
      margin-right: 72px;
      padding-top: 52px;
    }

    button {
      margin: 52px 0;
    }

    input,
    textarea {
      padding: 10px 16px;
    }

  .formMessage {
    margin-left: -72px;
  }}`;

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
    <StyledForm>
      <form
        name="contact"
        action="https://formspree.io/xdopnegr"
        method="POST"
        onSubmit={sendEmail}
        id={id}
      >
        <input type="hidden" name="Contact-form" value="contact" />
        <label htmlFor="yourname">Ämne</label>
        <br />
        <input
          type="text"
          name="topic"
          id="topic"
          placeholder={topic}
          required
        />
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
    </StyledForm>
  );
}
