//function domContentLoaded() {
  const inputBox = document.getElementById('item');
  const listItem = document.querySelector('ul');
  const clearListButton = document.querySelector('#clear');
  const addItemButton = document.querySelector('#add');
  const quaBox = document.getElementById('quantity');
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

    const item = new ShoppingListItem(trimmedValue, quaBox.value.trim());
    listItem.appendChild(item.toListItem());
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
    quaBox.value = ''
  });

  inputBox.addEventListener('keyup', onKeyUp);
  quaBox.addEventListener('keyup', onKeyUp);

  function onKeyUp(event) {
    /*Widget that the user types an item in to.*/
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }
    const item = new ShoppingListItem(trimmedValue, quaBox.value.trim());
    listItem.appendChild(item.toListItem());
    inputBox.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputBox.focus();
    quaBox.value = '';
  //}
}

/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 * @param {ShoppingListItem} item Item to append to the list.
 * @returns {HTMLElement}li element
 */



/**
 *Represents an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name of the item.
   * @param quantity {string}Quantity of the item
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  toListItem() {
    const inputBox = document.getElementById('item');
    const li = document.createElement('li');
    const itemSpan = document.createElement('span');
    const itemSpanText = document.createTextNode(this.name);

    itemSpan.appendChild(itemSpanText);
    li.appendChild(itemSpan);

    if (this.quantity !== '') {
      li.appendChild(document.createTextNode(' '));
      const quantitySpan = document.createElement('span');
      quantitySpan.textContent = `(${this.quantity})`;
      li.appendChild(quantitySpan);
    }

    const button = document.createElement('button');
    const text = document.createTextNode('delete');
    button.appendChild(text);

    button.addEventListener('click', function () {
      const clearListButton = document.querySelector('#clear');
      ///console.log('item list deleted: ' + event.target.name);
      li.remove();
      inputBox.focus();
      const listItems = document.querySelectorAll('li');
      clearListButton.disabled = listItems.length === 0;
    });

    li.appendChild(button);
    return li;
  }
}

