import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <Container fluid>
        <Row>
          <Col className="d-flex align-items-start">
            <div className="d-none d-md-flex">
              <span className="me-3">Other Features</span>
              <span className="me-3">Video Tutorials</span>
              <span>Buy Now!</span>
            </div>

            <Dropdown className="d-md-none">
              <Dropdown.Toggle variant="info" id="dropdown-basic">

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Other Features</Dropdown.Item>
                <Dropdown.Item href="#">Video Tutorials</Dropdown.Item>
                <Dropdown.Item href="#">Buy Now!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col className="d-flex justify-content-end align-items-center">
            <FaFacebookF className="me-3" />
            <FaTwitter className="me-3" />
            <FaInstagram />
          </Col>
        </Row>
      </Container>
      <hr style={{ position: 'relative', bottom: '20px' }} />
    </header>
  );
}

export default Header;
