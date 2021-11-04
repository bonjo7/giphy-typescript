import { FunctionComponent } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Container } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import GiphyLogo from "../Images/giphy.png";

const NavBar: FunctionComponent = () => {
  const { getGifsData } = UseRoutes();

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/' href='/' onClick={() => {getGifsData()}}>
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
};

export { NavBar };
