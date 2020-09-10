import { Squash as Hamburger } from 'hamburger-react';
import styled from 'styled-components';

import Menu from '../components/Menu';

const Container = styled.div`
  width: 100%;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 10;

  .burger__wrapper {
    margin-right: 20px;
    margin-top: 15px;
  }
  .hamburger-react {
    z-index: 500;
  }
`;

const Burger = (props) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Container>
      <div className="burger__wrapper">
        <Hamburger
          size={35}
          onToggle={(toggled) => {
            setOpen(toggled);
          }}
        />
      </div>
      <Menu show={isOpen} />
    </Container>
  );
};

export default Burger;
