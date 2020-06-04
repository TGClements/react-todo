import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import List from './Components/List';

function App() {
  const [items, setItems] = useState([]);
  const [pendingItems, setPendingItems] = useState(0);

  return (
    <div className='App'>
      <Navbar
        items={items}
        setItems={setItems}
        pendingItems={pendingItems}
        setPendingItems={setPendingItems}
      />
      <List
        items={items}
        setItems={setItems}
        pendingItems={pendingItems}
        setPendingItems={setPendingItems}
      />
    </div>
  );
}

export default App;
