import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

function MovieList({ movies }) {
  return (
    <Row>
      {movies.map((movie, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <MovieCard {...movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
