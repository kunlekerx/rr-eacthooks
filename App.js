import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing.',
      posterURL: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY450_.jpg',
      rating: 5
    },
    {
      title: 'Interstellar',
      description: 'A team travels through a wormhole in search of a new home for humanity.',
      posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
      rating: 4
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.rating) {
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Container className="mt-4">
      <h1 className="text-center">🎬 Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />

      <Row className="my-4">
        <Col>
          <Form>
            <Form.Control
              placeholder="Title"
              value={newMovie.title}
              onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              className="mb-2"
            />
            <Form.Control
              placeholder="Description"
              value={newMovie.description}
              onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
              className="mb-2"
            />
            <Form.Control
              placeholder="Poster URL"
              value={newMovie.posterURL}
              onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
              className="mb-2"
            />
            <Form.Control
              placeholder="Rating (1-5)"
              type="number"
              value={newMovie.rating}
              onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
              className="mb-2"
            />
            <Button onClick={handleAddMovie}>Add Movie</Button>
          </Form>
        </Col>
      </Row>

      <MovieList movies={filteredMovies} />
    </Container>
  );
}

export default App;
