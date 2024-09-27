import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const SUPABASE_URL = 'https://xnykiejhjsppxvnmqcev.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueWtpZWpoanNwcHh2bm1xY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODk0NDcsImV4cCI6MjAzODg2NTQ0N30.GTpLwlyahu9lMtSdKkCX4C9PtcT_7rvZPRCPYdkP1NY';

function Section() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${SUPABASE_URL}/rest/v1/movies`, {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
          },
        });
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Row>
            {movies.length > 0 && movies.map(movie => (
              <Col md={12} className="mb-4" key={movie.id}>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={movie.image_url} className="img-fluid rounded-start w-100" alt={movie.title} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description}</p>
                        <p className="card-text">
                          <b>Year:</b> {movie.release_year}<br />
                          <b>Category:</b> {movie.category}<br />
                          <b>Price:</b> {movie.price}$
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <Form className="mb-3">
            <Form.Control 
              type="text" 
              placeholder="Axtar" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
            <Button variant="primary" className='mt-3' onClick={handleSearch}>Search</Button>
          </Form>
          <div className="mt-4">
            <h6>Statistics</h6>
            <p>All combined we have a total of 24 movies in our library, regrouped in 19 collections, 14 genres and 122 actors.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Section;
