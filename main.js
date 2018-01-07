// const gameContainer = document.querySelector('#game');
// const  cell = document.createElement('div');
// const textNode = document.createTextNode('Hello world');
// cell.appendChild(textNode);
// // cell.textContext = 'Hello World';
// gameContainer.appendChild(cell);
//
// cell.addEventListener('click', function() {
//   cell.textContent = 'clicked';
// });
//
// // let onCLick = function onClick() {
// //   cell.textContent = 'Clkicked';
// // };
// //
// // cell.addEventListener('click', onCLick);
//
// //add clickeable widget that changes content

'use strict'

class Component {
  getElement() {
    return this._element;
  }
};

class CellComponent extends Component {
  constructor() {
    super();
    this._state = 'unknown';
    this._element = document.createElement('td');
    this._element.addEventListener('click', function() {
      this.setState('miss');
    }.bind(this));
    this._refresh();
  }

  setState(stateName) {
    this._state = stateName;
    this._refresh();
  }

  _refresh() {
    this._element.textContent = this._state;
    this._element.className = 'cell_' + this._state;
  }
}

const myCell = new CellComponent();
document.getElementById('cellContainer').appendChild(myCell.getElement());
