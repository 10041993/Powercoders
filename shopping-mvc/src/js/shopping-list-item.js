class ShoppingListItem {
  /**
   * @param name {string} Name of the item.
   * @param quantity {string}Quantity of the item
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Creates and returns an 'li' element for inclusion in the shopping list.
   * @returns {HTMLElement}li element
   */
  toListItem() {
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
    li.appendChild(button);
    return li;
  }
}