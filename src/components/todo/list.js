import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { When } from 'react-if';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import useForm from '../hooks/form.js';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SettingsContext } from '../../context/site.js';
import Pagination from './pagination.js';

import './todo.scss';

function TodoList(props) {
  const context = useContext(SettingsContext);

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

  // Get current posts
  const indexOfLastPost = context.currentPage * context.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - context.itemsPerPage;
  const currentPosts = props.list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => context.setCurrentPage(pageNumber);

  return (
    <>
      <div id="modal">
        <Modal.Dialog>
          {currentPosts.map(item => (
            <div>
              <Modal.Header>
                <Modal.Title>
                  <button id="deleteButton" type="submit" onClick={() => props.deleteItem(item._id)} type="button" class="btn-close float-right" ></button>
                  <Badge
                    className={`complete-${item.complete.toString()}`}
                    key={item._id}
                    onClick={() => props.toggleComplete(item._id)}
                    type="submit"
                    pill
                    variant={item.complete === true ? 'danger' : 'success'}
                  >
                    {item.complete === true ? 'complete' : 'pending'}
                  </Badge>{' '}
                  {item.assignee}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{item.text}</p>
              </Modal.Body>

              <Modal.Footer id="modalFooter">
                <small id="difficulty">Difficulty: {item.difficulty}</small>
                <Button onClick={() => handleToggle(item._id)} variant="primary">Update</Button>
              </Modal.Footer>
            </div>
          ))}
        </Modal.Dialog>
      </div>
      <When condition={toggle === true}>
        <Form id="formToggle">
          <FormControl onChange={(e) => setValue(e.target.value)} placeholder="update task" />
          <Button onClick={(e) => { handleSubmit(e); handleToggle(id); }} >UPDATE</Button>
        </Form>
      </When>
      <Pagination 
      itemsPerPage={context.itemsPerPage} 
      totalPosts={props.list.length} 
      paginate={paginate}
      />
    </>
  );
}

export default TodoList;

// <ListGroup className="listGroup">
//   {props.list.map(item => (
//     <div className="listGroupDiv">
//       <ListGroup.Item
//         id="listGroupItem"
//         className={`complete-${item.complete.toString()}`}
//         key={item._id}
//         onClick={() => props.toggleComplete(item._id)}
//         type="submit"
//       >
//         {item.assignee} to {item.text}. Difficulty: {item.difficulty}
//       </ListGroup.Item>
//       <Button onClick={() => handleToggle(item._id)}>UPDATE</Button>
//       <Button className="deleteItemButton" type="submit" onClick={() => props.deleteItem(item._id)}>DELETE</Button>
//     </div>
//   ))}
// </ListGroup>
