// Rat in a Maze

const { isSafeInteger } = require("lodash");

function solveRateInMaze(maze) {
    let output = new Array(N);
    for(let i = 0; i < N; i++) {
        output[i] = new Array(N);
        for(let j = 0; j < N; j++) {
            output[i][j] = 0;
        }
    }

    if(solveRateInMazeUtill(maze, 0, 0, output) == false) {
        console.log("Solution Doesn't exist");
        return false;
    }

    print(output);
    return true;
}

function solveRateInMazeUtill(Maze, x, y, output) {
    if(x == N && y == N - 1 && maze[x][y] == 1) {
        output[x][y] = 1;
        return true;
    }

    if(isSafeInteger(maze, x, y) == true) {

        if(output[x][y] == 1)
        return false;

        output[x][y] = 1;

        if(solveRateInMazeUtill(maze, x + 1, y, output))
          return true;
        if(solveRateInMazeUtill(maze, x, y + 1, output))
          return true;
        if(solveRateInMazeUtill(maze, x - 1, y, output))
          return true;
        if(solveRateInMazeUtill(maze, x, y - 1, output))
          return true;
          
          output[x][y] = 0;
          return false;
    }

    return false;
}