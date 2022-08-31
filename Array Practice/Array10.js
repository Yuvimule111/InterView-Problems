// Rotate Matrix by 90 Degree

function rotateMatrix(N, input) {

    for (let x = 0; x < N; x++) {

        for(let y = x; y < N - x - 1; y++) {

            let temp = input[x][y];

            input[x][y] = input[y][N - 1 - x];

            input[y][N - 1 - x]
               = input[N - 1 - x][N - 1 - y];

               input[N - 1 - x][N - 1 - y] = input[N - 1 - y][x];

               input[N - 1 - y][x] = temp;
        }
    }
}