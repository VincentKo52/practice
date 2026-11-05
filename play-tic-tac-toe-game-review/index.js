'use strict';

const readline = require('readline-sync');

//   -------------
//   | X | O | X |
//   -------------
//   | X | O | O |
//   -------------
//   | O | X |   |
//   -------------
//   Enter a row (0, 1, or 2) for player X: 2
//   Enter a column (0, 1, or 2) for player X: 2

// Board 
// - grid -> row + col
// - cell 

// Model harus agnostic

// MVC (Model View Controller)
// - Model (data)
//     - TicTacToeBoard
// - View (menampilkan UI)
//     - TicTacToeBoardView
//     - PromptView
// - Controller (otak yang memakai Model dan menampilkan data di View)
//     - TicTacToeController

/**
 * Represents a square Tic-Tac-Toe game board.
 * Provides a high-level API for grid manipulation and state queries.
 * @constructor
 * @param {number} gridSize 
 */
function TicTacToeBoard(gridSize) {
    /**
     * @type {number}
     * @private
     */
    this._gridSize = gridSize;

    this._gridSize = 
    [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
}

const board = new TicTacToeBoard(3);

const grid = new Array(3).fill(new Array(3).fill(null));

console.log(grid);

//53.50


















