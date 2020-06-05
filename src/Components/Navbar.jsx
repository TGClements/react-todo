import React, { Fragment, useState } from 'react';

function Navbar({ items, setItems, pendingItems, setPendingItems }) {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      // If nothing is entered, display the alert for 3 seconds
      let x = document.getElementById('emptyAlert');
      x.style.display = 'block';
      setTimeout(() => {
        x.style.display = 'none';
      }, 3000);
    } else {
      // Otherwise add item
      setItems(items.concat(text));
      setText('');
      document.getElementById('inputField').focus();
      setPendingItems(pendingItems + 1);
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>To-Do List</span>

        <form onSubmit={onSubmit} className='form-inline mx-auto my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Add To-Do Item'
            aria-label='Add To-Do Item'
            id='inputField'
            value={text}
            onChange={onChange}
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Add To List
          </button>
        </form>
        <button
          className='btn btn-outline-danger my-2 my-sm-0'
          onClick={() => {
            // Assign a fadeout animation to each list item that plays for 1s
            let x = document.getElementById('mainList');
            x = x.childNodes;
            for (var i = 1; i < x.length; i++) {
              x[i].style.animationName = 'liFadeOut';
              x[i].style.animationDuration = '1s';
            }
            setPendingItems(0);
            // Create delay before deleting items to allow the animation to play
            setTimeout(() => {
              setItems([]);
              // Reset animations, so it will apply when button is clicked more than once
              for (var i = 1; i < x.length; i++) {
                x[i].style.animationName = 'none';
                x[i].style.animationDuration = '0';
              }
            }, 1000);
          }}
        >
          Clear List
        </button>
      </nav>

      <div
        className='alert alert-danger'
        role='alert'
        id='emptyAlert'
        style={{ display: 'none' }}
      >
        <strong>Please enter a To-Do item!</strong>
      </div>
    </Fragment>
  );
}

export default Navbar;
