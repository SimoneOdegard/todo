import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';

import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; // class api

const todoAPI = 'https://api-server-simone.herokuapp.com/'; // my api


const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    console.log('finding item', item);
    item.complete = false;
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
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

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

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
          <TodoForm addItem={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            toggleComplete={_toggleComplete}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
