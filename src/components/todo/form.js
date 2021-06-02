import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import useForm from '../hooks/form.js';

function TodoForm(props) {

  const [handleInputChange, handleSubmit, values] = useForm(props.addItem)

  return (
    <>
      <Card>
        <Form onSubmit={handleSubmit}>
        <h3>Add To Do Item</h3>
          <Form.Group controlId="item">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control name="text" placeholder="Item Details" onChange={handleInputChange}/>
          </Form.Group>
          <br/>
          <Form.Group controlId="person">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleInputChange}/>
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit">Add Item</Button>
        </Form>
      </Card>
    </>
  );
}

export default TodoForm;
