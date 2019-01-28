document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.getElementById('item');
  const listItem = document.querySelector('ul');
  const addItemButton = document.querySelector('#add');
  const clearListButton = document.querySelector('#clear');
  document.querySelector('#clear').disabled = true;

  clearListButton.addEventListener('click', function () {
    let listItems = document.querySelectorAll('li');
    listItems.forEach(function (element) {
      element.remove();
      console.log('shopping list is deleted');
    });
    clearListButton.disabled = true;
  });

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();
    if (trimmedValue === '') {
      return;
    }

    listItem.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    /*Widget that the user types an item in to.*/
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }

    listItem.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });
  inputBox.focus();
  addItemButton.disabled = true;

});

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemText text of the item to add to the list
 * @returns {HTMLElement}li element
 */
function createNewListItem(itemText) {
  console.log(itemText);
  const inputBox = document.getElementById('item');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemText);

  span.appendChild(spanText);
  li.appendChild(span);

  const button = document.createElement('button');
  const text = document.createTextNode('delete');
  const clearListButton = document.querySelector('#clear');
  button.addEventListener('click', function () {
    console.log('item list deleted: ' + itemText);
    li.remove();
    inputBox.focus();
    const listItems = document.querySelectorAll('li');
    clearListButton.disabled = listItems.length === 0;
  });

  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);
  return li;
}