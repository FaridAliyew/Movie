import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Sequex</strong>, your go-to platform for the latest and greatest movies from around the world. Whether you're a fan of Hollywood blockbusters, indie films, or foreign cinema, we have something for every movie lover.
          </p>
          <h2>Our Mission</h2>
          <p>
            At Sequex, our mission is to bring the magic of cinema to everyone. We believe that movies have the power to inspire, entertain, and educate, and we're committed to offering a diverse collection of films that cater to a wide range of tastes and preferences.
          </p>
          <h2>What We Offer</h2>
          <ul>
            <li>Exclusive access to the latest movie releases</li>
            <li>A wide selection of genres including action, drama, sci-fi, and documentaries</li>
            <li>Curated recommendations based on your viewing preferences</li>
            <li>Behind-the-scenes content and interviews with filmmakers and actors</li>
          </ul>
          <h2>The History of Cinema</h2>
          <p>
            Cinema has come a long way since its inception in the late 19th century. From the first silent films to today's high-definition blockbusters, the art of filmmaking continues to evolve, captivating audiences around the globe. At CinemaWorld, we celebrate this rich history by not only offering modern films but also highlighting classics that have shaped the industry.
          </p>
          <h2>Join Our Community</h2>
          <p>
            Become a part of the CinemaWorld community today and discover a world of cinematic wonder. Whether you're looking to catch the latest release or explore hidden gems, we've got you covered.
          </p>
          <p>
            <strong>Contact us:</strong> <a href="mailto:info@cinemaworld.com">info@cinemaworld.com</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
