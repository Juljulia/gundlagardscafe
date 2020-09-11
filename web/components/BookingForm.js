import styled from 'styled-components';

const StyledForm = styled.div``;

export default function BookingForm() {
  return (
    <StyledForm>
      <h4>Boka biljett</h4>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="yourname">Rubrik</label> <br />
          <input
            type="text"
            name="topic"
            id="topic"
            placeholder="Ex. Frukostyoga"
          />
        </p>
        <p>
          <label htmlFor="yourmessage">Meddelande:</label> <br />
          <textarea
            name="message"
            id="yourmessage"
            placeholder="Ex. Vi kommer två stycken på yogan 24/5."
          ></textarea>
        </p>
        <p>
          <button type="submit">Skicka</button>
        </p>
      </form>
    </StyledForm>
  );
}
