import React from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './todo.scss';

function TodoList(props) {

  return (
    <>
      <ListGroup className="listGroup">
        {props.list.map(item => (
          <div className="listGroupDiv">
            <ListGroup.Item
              id="listGroupItem"
              className={`complete-${item.complete.toString()}`}
              key={item._id}
              onClick={() => props.toggleComplete(item._id)}
              type="submit"
            >
              {item.text}
            </ListGroup.Item>
            <Button className="deleteItemButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
          </div>
        ))}
      </ListGroup>
    </>
  );
}

export default TodoList;
