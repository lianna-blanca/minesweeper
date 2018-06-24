document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells: []
  }

var boardSize = 4; //max at 6

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
}


function startGame () {
  gameBoard();
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
    document.addEventListener ('click', checkForWin)
    document.addEventListener ('contextmenu', checkForWin)
  }

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (!board.cells[i].isMine && board.cells[i].hidden) {return}
    if (board.cells[i].isMine && !board.cells[i].isMarked) {return}
    }
lib.displayMessage('You found them all!')
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
}
