import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function Filter({ filterTitle, filterRating, setFilterTitle, setFilterRating }) {
  return (
    <Row className="my-3">
      <Col sm={6}>
        <Form.Control
          placeholder="Search by Title"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </Col>
      <Col sm={6}>
        <Form.Select
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1 ⭐ & up</option>
          <option value={2}>2 ⭐ & up</option>
          <option value={3}>3 ⭐ & up</option>
          <option value={4}>4 ⭐ & up</option>
          <option value={5}>5 ⭐ only</option>
        </Form.Select>
      </Col>
    </Row>
  );
}

export default Filter;
