import styled from 'styled-components';

const StyledForm = styled.div`
  margin: 16px 0;

  h4 {
    font-size: 33px;
    margin-bottom: 32px;
    padding-top: 16px;
    margin-top: 0;
    text-transform: uppercase;
  }

  form {
  }

  input,
  textarea {
    width: 100%;
    font-weight: 300;
    font-size: 20px;
    line-height: 161.6%;
    border-radius: 9px;
    padding: 10px 2px;
    border: 1px solid #000000;
  }

  label {
    font-size: 20px;
    line-height: 161.6%;
    font-size: 24px;
    font-weight: 400;
  }

  textarea {
    height: 427px;
  }

  button {
    background: #cd8501;
    border-radius: 11px;
    width: 163px;
    height: 43px;
    color: white;
    filter: drop-shadow(4px 4px 6px rgba(209, 158, 63, 0.25));
    border: none;
    font-family: 'Amatic SC', cursive;
    font-size: 25px;
    line-height: 32px;
    float: right;
  }
`;

export default function BookingForm() {
  return (
    <StyledForm>
      <h4>Boka biljett</h4>
      <form name="contact" method="POST" data-netlify="true" id="bookingForm">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Ämne</label> <br />
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="Ex. Frukostyoga"
          />
        </p>
        <p>
          <label htmlFor="yourmessage">Meddelande</label> <br />
          <textarea
            name="message"
            id="yourmessage"
            placeholder="Ex. Vi kommer två stycken på yogan 24/5."
          ></textarea>
        </p>
        <p>
          <button type="submit">Boka</button>
        </p>
      </form>
    </StyledForm>
  );
}
