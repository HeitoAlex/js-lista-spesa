const shoppingList = ['carne', 'pesce', 'pane', 'latte', 'pasta'];
const ulElement = document.querySelector('ul');
let i = 0;

while (i < shoppingList.length){

    const liElement = document.createElement('li');
    liElement.append(shoppingList[i]);
    ulElement.appendChild(liElement);
    i++

}