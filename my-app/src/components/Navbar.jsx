import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

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
                <Dropdown.Item href="#home">Home</Dropdown.Item>
                <Dropdown.Item href="#movies">Movies</Dropdown.Item>
                <Dropdown.Item href="#blog">Blog</Dropdown.Item>
                <Dropdown.Item href="#mega-menu">Mega Menu</Dropdown.Item>
                <Dropdown.Item href="#forms">Forms</Dropdown.Item>
                <Dropdown.Item href="#contact">Contact</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="d-none d-xl-flex">
              <span className="navbar-link">Home</span>
              <span className="navbar-link">Movies</span>
              <span className="navbar-link">Blog</span>
              <span className="navbar-link">Mega Menu</span>
              <span className="navbar-link">Forms</span>
              <span className="navbar-link">Contact</span>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
