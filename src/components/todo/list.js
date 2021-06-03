import React from 'react';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import useForm from '../hooks/form.js';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import './todo.scss';

function TodoList(props) {

  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState('');
  const [value, setValue] = useState('');
  const [handleSubmit] = useForm(todo);

  function handleToggle(id) {
    setToggle(!toggle);
    setId(id);
  }

  useEffect(() => {
    console.log(value);
  })

  function todo(task) {
    setValue(task);
    props.updateItem(id, value);
  }

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
              {item.assignee} to {item.text}. Difficulty: {item.difficulty}
            </ListGroup.Item>
            <Button onClick={() => handleToggle(item._id)}>UPDATE</Button>
            <Button className="deleteItemButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
          </div>
        ))}
      </ListGroup>
      <When condition={toggle === true}>
        <Form >
          <FormControl onChange={(e) => setValue(e.target.value)} placeholder="update task" />
          <Button onClick={(e) => { handleSubmit(e); handleToggle(id); }} >UPDATE</Button>
        </Form>
      </When>
    </>
  );
}

export default TodoList;

{/* <ListGroup className="listGroup">
  {props.list.map(item => (
    <div className="listGroupDiv">
      <ListGroup.Item
        id="listGroupItem"
        className={`complete-${item.complete.toString()}`}
        key={item._id}
        onClick={() => props.toggleComplete(item._id)}
        type="submit"
      >
        {item.assignee} to {item.text}. Difficulty: {item.difficulty}
      </ListGroup.Item>
      <Button onClick={() => handleToggle(item._id)}>UPDATE</Button>
      <Button className="deleteItemButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
    </div>
  ))}
</ListGroup> */}

{/* <Card>
{props.list.map(item => (
<Card.Header>Featured</Card.Header>
<Card.Body>
  <Card.Title>{item.assignee}</Card.Title>
  <Card.Text>
    {item.text}
  </Card.Text>
  <small>{item.difficulty}</small>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
))}
</Card> */}