import styled from 'styled-components';

const StyledForm = styled.div`
  p {
    color: red;
  }
`;

export default function ContactForm() {
  return (
    <StyledForm>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Rubrik</label> <br />
          <input type="text" name="topic" id="topic" />
        </p>
        <p>
          <label htmlFor="yourmessage">Meddelande:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Skicka</button>
        </p>
      </form>
    </StyledForm>
  );
}
