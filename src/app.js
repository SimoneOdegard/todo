import React from 'react';
import ToDo from './components/todo/todo-connected.js';

import Header from './components/header/header.js';

function App() {
  return (
    <>
      <Header />
      <ToDo />
    </>
  );
}

export default App;