const gameContainer = document.querySelector('#game');
const  cell = document.createElement('div');
const textNode = document.createTextNode('Hello world');
cell.appendChild(textNode);
// cell.textContext = 'Hello World';
gameContainer.appendChild(cell);

cell.addEventListener('click', function() {
  cell.textContent = 'clicked';
});

//add clickeable widget that changes content
