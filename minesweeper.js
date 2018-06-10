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
				isMine: Math.floor(Math.random() * 1.5),
				isMarked: false,
				hidden: true,
			})
		}
	}
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
//   	var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

	var surroundingCells = getSurroundingCells(row, col);

// define it so returns the no of surrounding cells with isMine = true
// use  	var surrounding = lib.getSurroundingCells(cell.row, cell.col)
// get row and col out of your cell  ---> board.cell.X / []
// loop through surrounding cells returned from getSurroundingCells,
// check all formine,  add to a count variable if so (like last time)
// then (return count)
}
