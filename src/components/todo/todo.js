import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './todo.scss';

function ToDo() {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let newList = list.filter(listItem => listItem._id !== id);
      setList(newList);
    }
  };

  const updateItem = (id, value) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.text = value;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };

  useEffect(() => {
    let newList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(newList);
  }, []);

  useEffect(() => {
    if (list.length >= 1) { document.title = `${list.filter(item => !item.complete).length} items to complete` }
  }, [list]);

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" className="todoManager">
          <Navbar.Brand >To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
        </Navbar>
      </header>

      <section className="todo">

        <div>
          <TodoForm addItem={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;
