import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [hideComplete, setHideComplete] = useState(true); // hide completed tasks
  const [sortItems, setSortItems] = useState('difficulty'); // sorting the tasks by difficulty
  const [currentPage, setCurrentPage] = useState(1); // current page
  const [itemsPerPage, setItemsPerPage] = useState(3); // number of items on the page

  const state = {
    hideComplete,
    setHideComplete,
    itemsPerPage,
    setItemsPerPage,
    sortItems,
    setSortItems,
    currentPage,
    setCurrentPage
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;