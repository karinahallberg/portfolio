import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Row className="d-flex justify-content-around">
      <Col xs={12} md={6}>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
      </Col>
      </Row>
    </nav>
  );
};

export default Pagination;