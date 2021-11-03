import React, { FunctionComponent } from "react";
import { Navbar, Container } from "react-bootstrap";
import GiphyLogo from "../Images/giphy.png";

const NavBar: FunctionComponent = () => (
  <Navbar bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href='#home'>
        <img
          alt='giphy-logo'
          src={GiphyLogo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          style={{ marginRight: "10px" }}
        />
        Giphy app
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export { NavBar };
