import { checkIfNoMovesLeft } from './board-printer.js';


// Example board:
let board = [
    ['X', '_', '_'],
    ['_', 'X', '_'],
    ['O', 'O', 'X']
];


/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/



function checkRow(board, player, rowNumber) {

    let xPlayer = [];
    let oPlayer = [];
    if (player === "X")
        xPlayer = board[rowNumber].filter(x => x === 'X');
    else
        oPlayer = board[rowNumber].filter(x => x === 'O');

    if (xPlayer.length === 3 || oPlayer.length === 3)
        return true;
    return false;
}

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
function checkColumn(board, player, columnNumber) {

    let xPlayer = [];
    let oPlayer = [];

    for (let i = 0; i < 3; i++)
        if (player === "X" && board[i][columnNumber] === "X")
            xPlayer.push("X");
        else if (player === "O" && board[i][columnNumber] === "O")
            oPlayer.push("O");

    if (xPlayer.length === 3 || oPlayer.length === 3)
        return true;
    return false;
}


/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
function checkDiagonal(board, player) {

    let xPlayer = [];
    let oPlayer = [];
    for (let i = 0; i < 3; i++) {
        if (player === "X" && board[i][i] === "X")
            xPlayer.push("X");
        else if (player === "O" && board[i][i] === "O")
            oPlayer.push("O");
    }

    if (xPlayer.length === 3 || oPlayer.length === 3)
        return true;

    else {
        let xPlayer = [];
        let oPlayer = [];

        let k = 0;
        for (let j = 2; j >= 0; j--) {

            if (player === "X" && board[k][j] === "X")
                xPlayer.push("X");
            else if (player === "O" && board[k][j] === "O")
                oPlayer.push("O");

            k++;
        }

        if (xPlayer.length === 3 || oPlayer.length === 3)
            return true;
        else
            return false;
    }

}



// It may be easier to use an if statement than a loop here



/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
    for (let i = 0; i <= 2; i++) {
        if (checkRow(board, player, i) || checkColumn(board, player, i)) {
            return true;
        }
    }

    if (checkDiagonal(board, player)) {
        return true;
    }

    return false;
}

export function isGameOver(board) {
    if (checkIfPlayerWon(board, 'X')) {
        console.log('X has won the game!\n');
        return true;
    }

    if (checkIfPlayerWon(board, 'O')) {
        console.log('O has won the game!\n');
        return true;
    }

    if (checkIfNoMovesLeft(board)) {
        console.log('Game Over - It\s a tie!\n');
        return true;
    }

    return false;
}
