/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

let board = [
            
            ['x', 'X', 'x'],
            ['O', 'O', 'X'],
            ['X', '0', '0'],
];

function hasEmptyCells(board){
    let emptyCellsCount = 0;

    for (let )

export function printBoard(board) {
    const firstRow = board[0];
    const secondRow = board[1];
    const thirdRow = board[2];

    console.log(`  ${firstRow[0]}  |  ${firstRow[1]}   |  ${firstRow[2]}  `);
    console.log("==================");
    console.log(`  ${secondRow[0]}  |  ${secondRow[1]}   |  ${secondRow[2]}  `);
    console.log("==================");
    console.log(`  ${thirdRow[0]}  |  ${thirdRow[1]}   |  ${thirdRow[2]}  `);
    console.log("==================");
}

printBoard(board)

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    let emptyCellsCount = 0;

    for (let row of board) {
        let emptyCells = row.filter(cellValue => cellValue === "_");
        emptyCellsCount = emptyCellsCount + emptyCells.length
    }
    return emptyCellsCount === 0;
}

console.log(checkIfNoMovesLeft(board));
