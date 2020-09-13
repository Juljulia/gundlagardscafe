import styled from 'styled-components';

const StyledForm = styled.div`
  height: 600px;
  background: #959967;

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
    padding-top: 51px;
    margin-top: 64px;
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
  }

  input {
    width: 75%;
  }

  label {
    font-size: 20px;
    line-height: 161.6%;
    font-size: 24px;
    font-weight: 400;
    color: #959967;
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
    margin-top: 32px;
  }
`;

export default function ContactForm() {
  return (
    <StyledForm>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="yourname">Ämne</label> <br />
        <input
          type="text"
          name="topic"
          id="topic"
          placeholder="Fira något stort?"
        />
        <label htmlFor="yourmessage">Meddelande</label> <br />
        <textarea
          name="message"
          id="yourmessage"
          placeholder="Berätta mer..."
        ></textarea>
        <button type="submit">Skicka</button>
      </form>
    </StyledForm>
  );
}
