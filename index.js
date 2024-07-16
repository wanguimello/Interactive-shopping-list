document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addItemBtn = document.getElementById('addItemBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const shoppingList = document.getElementById('shoppingList');
  
    const addItem = () => {
      const itemName = itemInput.value.trim();
      if (itemName) {
        const li = document.createElement('li');
        li.textContent = itemName;
        li.addEventListener('click', () => {
          li.classList.toggle('purchased');
        });
        shoppingList.appendChild(li);
        itemInput.value = '';
      }
    };
  
    addItemBtn.addEventListener('click', addItem);
  
    itemInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        addItem();
      }
    });
  
    clearListBtn.addEventListener('click', () => {
      shoppingList.innerHTML = '';
    });
  });
  
