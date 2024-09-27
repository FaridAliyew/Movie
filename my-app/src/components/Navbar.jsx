import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Link-i import edirik

function Navbar() {

  return (
    <nav>
      <Container fluid>
        <Row className="align-items-center">
          <Col className="d-lg-flex justify-content-center justify-content-md-start">
            <img
              src="https://themes.thememasters.club/sequex-light/wp-content/themes/sequex/images/logo.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Col>

          <Col className="d-flex justify-content-end align-items-center">
            <Dropdown className="d-xl-none">
              <Dropdown.Toggle className="navbar-dropdown-toggle">
                Menu
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item as={Link} to="/">Home</Dropdown.Item> {/* Link olaraq to istifadə edirik */}
                <Dropdown.Item as={Link} to="/about">About</Dropdown.Item>
                <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="d-none d-xl-flex">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/about" className="navbar-link">About</Link>
              <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
