// Sudoku Solver

const { isSafeInteger } = require("lodash");

function solveSudoku(grid, row, col) {

    if(row == N && col == N) 
    return true;

    if(col == N) {

        row++;
        col = 0;
    }
        if(grid[row][col] != 0)
          return solveSudoku(grid, row, col + 1);

          for(let num  = 1; num < 10; num++) {

            if(isSafeInteger(grid, row, col, num)) {

                grid[row][col] = num;

                if(solveSudoku(grid, row, col + 1)) 
                  return true;
            }

            grid[row][col] = 0;
          }

          return false;
    }
