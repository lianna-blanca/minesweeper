document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: []
  }

var boardSize = 3; //max at 6

function gameBoard() {
  for (var v = 0; v < boardSize; v++) {
    for (var h = 0; h < boardSize; h++) {
      board.cells.push({
        row: v,
        col: h,
        isMine: Boolean(Math.floor(Math.random()*1.5)),
        isMarked: false,
        hidden: true,
      })
    }
  }
console.log(board.cells)
}


function startGame () {
  gameBoard();
  for (i = 0, i <= board.cells.length; i++;) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }
  return count
  console.log(count)
}
