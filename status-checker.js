import { checkIfNoMovesLeft } from './board-printer.js';

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/

function checkRow(board, player, rowNumber) {
    let playCount = [];
    playCount = board[rowNumber].filter(x => x === player);
    if (playCount.length === 3)
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
    let playCount = [];
    for (let i = 0; i < 3; i++)
        if (board[i][columnNumber] === player)
            playCount.push(player);
    if (playCount.length === 3)
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
    let playCount = [];

    for (let i = 0; i < 3; i++)
        if (board[i][i] === player)
            playCount.push(player);
    if (playCount.length === 3)
        return true;

    playCount = [];

    let k = 0;
    for (let j = 2; j >= 0; j--) {
        if (board[k][j] === player)
            playCount.push(player)
        k++;
    }
    if (playCount.length === 3)
        return true;
    else
        return false;
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
