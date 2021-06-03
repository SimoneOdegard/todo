import React from 'react';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import useForm from '../hooks/form.js';
import Toast from 'react-bootstrap/Toast';
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
      <div>
        <Toast className="toast">
          {props.list.map(item => (
            <div>
              <Toast.Header
                id="toastHeader"
                key={item._id}
                onClick={() => props.toggleComplete(item._id)}
                type="submit"
              >
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{item.assignee}</strong>
                <small>{item.difficulty}</small>
              </Toast.Header>
              <Toast.Body id="toastBody">{item.text}</Toast.Body>
                  <Button className="toastButton" onClick={() => handleToggle(item._id)}>UPDATE</Button>
                  <Button className="toastButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
            </div>
          ))}
        </Toast>
      </div>
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
<Card.Header>Featured</Card.Header>
{props.list.map(item => (
  <Card.Body>
    <Card.Title>{item.assignee}</Card.Title>
    <Card.Text>
      {item.text}
    </Card.Text>
    <small>{item.difficulty}</small>
    <Button variant="primary">Go somewhere</Button>
))}
  </Card.Body>
</Card> */}

{/* <Toast className="toast">
          {props.list.map(item => (
            <div>
              <Toast.Header
                id="toastHeader"
                key={item._id}
                onClick={() => props.toggleComplete(item._id)}
                type="submit"
              >
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{item.assignee}</strong>
                <small>{item.difficulty}</small>
              </Toast.Header>
              <Toast.Body id="toastBody">{item.text}</Toast.Body>
                  <Button className="toastButton" onClick={() => handleToggle(item._id)}>UPDATE</Button>
                  <Button className="toastButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
            </div>
          ))}
        </Toast> */}