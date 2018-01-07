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
  constructor({
    location,
    handleCellClick
  }) {
    super();
    this._state = 'unknown';
    this._element = document.createElement('td');
    this._element.addEventListener('click', function() {
      handleCellClick({
        location
      });
    });
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

class BoardComponent extends Component {
  constructor({ handleCellClick, size = 8 }) {
    super();
    // Create _element , create child cells, append to our element.
    this._element = document.createElement('table');
    this._cells = {};
    for (let rowNumber = 0; rowNumber < size; rowNumber += 1) {
      const rowElement = document.createElement('tr');
      for (let columnNumber = 0; columnNumber < size; columnNumber += 1) {
        const cell = new CellComponent({
          handleCellClick,
          location: {
            row: rowNumber,
            column: columnNumber
          }
        });
        rowElement.appendChild(cell.getElement());
        //Also save refence to the cell so that it can
        // be adressed later.
        this._cells[`${rowNumber}x${columnNumber}`] = cell;
      }
      this._element.appendChild(rowElement);
    }
  }

  setCellState(location, state) {
    // Find the appropriate cell, call its setState().
    const key = `${location.row}x${location.column}`;
    this._cells[key].setState(state);
  }

}


class GameController {
  constructor(board) {
    this._board = board;
  }
  handleCellClick({ location }) {
    this._board.setCellState(location, 'miss');
  }
}

let myController;

function handleCellClick(...args) {
  myController.handleCellClick.apply(myController, args);
}

// const myCell = new CellComponent({
//   handleCellClick,
//   location: 0
// });

const board = new BoardComponent({ handleCellClick });
myController = new GameController(board);

const boardContainer = document.getElementById('boardContainer');
boardContainer.appendChild(board.getElement());
