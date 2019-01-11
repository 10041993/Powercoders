document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let listItem = document.querySelector('ul');
  let addItemButton = document.querySelector('button');
  addItemButton.addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
      listItem.appendChild(createNewListItem(inputBox.value.trim()));
      inputBox.value = '';
      addItemButton.disabled = true;
    }
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        listItem.appendChild(createNewListItem(inputBox.value.trim()));
        inputBox.value = '';
      }
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });

  inputBox.focus();
  addItemButton.disabled = true;
});

function createNewListItem(itemText) {
  console.log(itemText);
  let li = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);
  let button = document.createElement('button');
  let text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    console.log('item list deleted: ' + itemText);
    li.remove();
  });
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);
  return li;
}
