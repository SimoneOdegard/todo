import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <Nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Button onClick={() => paginate(number)} className="page-link" >
              {number}
            </Button>
          </li>
        ))}
      </ul>

    </Nav>
  )
}

export default Pagination;