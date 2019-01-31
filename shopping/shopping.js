function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const listItem = document.querySelector('ul');
  const clearListButton = document.querySelector('#clear');
  const addItemButton = document.querySelector('#add');
  const quaBox = document.getElementById('quantity');
  document.querySelector('#clear').disabled = true;

  inputBox.addEventListener('keyup', onKeyUp);
  quaBox.addEventListener('keyup', onKeyUp);

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

    const item = {
      name: trimmedValue,
      quantity: quaBox.value
    };

    listItem.appendChild(createNewListItem(item));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
  });

  function onKeyUp() {
    /*Widget that the user types an item in to.*/
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }
    const item = {
      name: trimmedValue,
      quantity: quaBox.value
    };

    listItem.appendChild(createNewListItem(item));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = true;
    inputBox.focus();
  }
}

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 * @param {{name: string, quantity: string}} item Item to append to the list.
 * @returns {HTMLElement}li element
 */
function createNewListItem(item) {
  console.log(item.name);

  const inputBox = document.getElementById('item');
  const li = document.createElement('li');
  const itemSpan = document.createElement('span');
  const itemSpanText = document.createTextNode(item.name);

  itemSpan.appendChild(itemSpanText);
  li.appendChild(itemSpan);

  if (item.quantity !== '') {
    li.appendChild(document.createTextNode(' '));
    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = `(${item.quantity})`;
    li.appendChild(quantitySpan);
  }

  const button = document.createElement('button');
  const text = document.createTextNode('delete');
  button.appendChild(text);

  button.addEventListener('click', function () {
    const clearListButton = document.querySelector('#clear');
    console.log('item list deleted: ' + item.name);
    li.remove();
    inputBox.focus();
    const listItems = document.querySelectorAll('li');
    clearListButton.disabled = listItems.length === 0;
  });

  li.appendChild(button);
  return li;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}

const person = {
  name: {
    first: 'Ahmad',
    last: 'Al Ahmad'
  },
  interests: ['Teaching', 'Skiing'],
  greet: function () {
    console.log(`Hello ${this.name.first}`);
  }
};

person.name.first = 'Nicholas';
person.interests[0] = 'Programming';
person.interests.push('Teaching');
person.name = {first: 'Ahmad', last: 'Al Ahmad'};
person.greet();