import React from 'react';

function ListItem({ items, setItems, pendingItems, setPendingItems }) {
  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i} id={i}>
            <div className='card' id='listItem'>
              <div className='d-inline-flex align-items-center'>
                <p className='flex-grow-1'>{item}</p>
                <div className='itemButtons'>
                  <button
                    className='btn btn-outline-primary'
                    id='completeButton'
                    onClick={() => {
                      // Decrease the pending items
                      setPendingItems(pendingItems - 1);
                      // Creating styling, indicating that the item is complete
                      let x = document.getElementById(i);
                      x.style.textDecoration = 'line-through';
                      x.style.color = 'grey';

                      let submitBtn = x.getElementsByClassName(
                        'btn-outline-primary'
                      );
                      submitBtn[0].style.visibility = 'hidden';
                    }}
                  >
                    <svg
                      className='bi bi-check-circle'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z'
                      />
                    </svg>
                  </button>
                  <button
                    className='btn btn-outline-danger'
                    id='deleteButton'
                    onClick={(index) => {
                      let newArray = [...items];
                      newArray.splice(i, 1);

                      // Assign a fadeout animation to the list item that plays for 1s
                      let x = document.getElementById(i);
                      x.style.animationName = 'liFadeOut';
                      x.style.animationDuration = '1s';

                      // Create delay before deleting item to allow the animation to play
                      setTimeout(() => {
                        // Update the array with the remaining listItems
                        setItems(newArray);
                        // Reset animation, so it will apply when button is clicked more than once
                        x.style.animationName = 'none';
                        x.style.animationDuration = '0';

                        //if (i !== items.length) {
                        //HERE
                        if (x.style.textDecoration === 'line-through') {
                          x.style.textDecoration = 'none';
                          x.style.color = 'black';

                          let submitBtn = x.getElementsByClassName(
                            'btn-outline-primary'
                          );
                          submitBtn[0].style.visibility = 'visible';
                        }
                        // If an item that is not at index 0 is deleted, we need to check if any item lower than it was marked as completed
                        // If it was marked completed, we need to transfer the styling up an element, then reset the original element
                        // Ex. if element 3 is marked complete & element 2 was deleted, the array values would shift up, but the styling would
                        //     stay on element 3, even though element 2 should now be the completed item
                        for (var z = i; z < items.length - 1; z++) {
                          let xx = document.getElementById(z);
                          if (xx.style.textDecoration === 'line-through') {
                            // Set the styling for the element's new index
                            document.getElementById(
                              z - 1
                            ).style.textDecoration = 'line-through';
                            document.getElementById(z - 1).style.color = 'gray';
                            let submitBtn2 = document
                              .getElementById(z - 1)
                              .getElementsByClassName('btn-outline-primary');
                            submitBtn2[0].style.visibility = 'hidden';
                            // Reset the styling for the element's old index
                            xx.style.textDecoration = 'none';
                            xx.style.color = 'black';

                            let submitBtn3 = xx.getElementsByClassName(
                              'btn-outline-primary'
                            );
                            submitBtn3[0].style.visibility = 'visible';
                          }
                        }
                        //}
                        // Get the amount of pending items
                        let tempCounter = 0;
                        for (i = 0; i < items.length - 1; i++) {
                          x = document.getElementById(i);
                          if (x.style.textDecoration !== 'line-through') {
                            tempCounter++;
                          }
                        }
                        setPendingItems(tempCounter);
                      }, 1000);
                    }}
                  >
                    <svg
                      className='bi bi-x-circle'
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z'
                      />
                      <path
                        fillRule='evenodd'
                        d='M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
