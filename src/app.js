import React from 'react';
import ToDo from './components/todo/todo-connected.js';
import Header from './components/header/header.js';
import SettingsContext from './context/site.js';

function App() {
  return (
    <>
      <SettingsContext>
        <Header />
        <ToDo />
      </SettingsContext>
    </>
  );
}

export default App;