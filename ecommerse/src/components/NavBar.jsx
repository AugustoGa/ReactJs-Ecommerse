import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import storeLogo from '../logo.svg';
import { useState } from 'react';


function NavBar() {
  const [expanded, setExpanded] = useState(false);

    return (
      <Navbar expanded={expanded} className="miNavbar primary sticky-top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
          alt=""
          src={storeLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Moontagne</Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/calzado">Calzado</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/remera-termica">Remeras Térmicas</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category/cuello-balaclava">Cuellos y Balaclavas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">La empresa</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    );
  }

export default NavBar;