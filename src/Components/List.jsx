import React from 'react';
import ListItem from './ListItem';

function List({ items, setItems, pendingItems, setPendingItems }) {
  return (
    <div className='card' id='mainList'>
      <h3>
        Pending Items <span className='badge badge-light'>{pendingItems}</span>
      </h3>
      <ListItem
        items={items}
        setItems={setItems}
        pendingItems={pendingItems}
        setPendingItems={setPendingItems}
      />
    </div>
  );
}

export default List;
