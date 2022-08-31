// Knight's Tour

const { isSafeInteger, isEqualWith } = require("lodash");

function solveKnughtTour() {
    let output = new Array(s);
    for(var i = 0; i < output.length; i++) {
        output[i] = new Array(2);
    }
        for(let x = 0; x < N; x++)
         for(let y = 0; y < N; y++)
         output[x][y] = -1;

         let xmove = [2, 1, -1, -2, -2, -1, 1, 2];
         let ymove = [1, 2, 2, 1, -1, -2, -2, -1];

         output[0][0] = 0;

         if(!solveKnughtTourUtill(0, 0, 1, output, xmove, ymove)) {
            console.log("Solution does not exist");
            return false;
         } else
           print(output);

           return true;
    }

    function solveKnughtTourUtill(x, y, movei, output, xmove, ymove) {
        let k, x_next, y_next;
        if(movei == N * N)
        return true;

        for(k = 0; k < 8; k++) {
            x_next = x + xmove[k];
            y_next = y + ymove[k];

            if(isSafeInteger(x_next, y_next, output)) {
                output[x_next][y_next] = movei;
                if(solveKnughtTourUtill(x_next, y_next, movei + 1, output, xmove, ymove))
                  return true;
                else
                  output[x_next][y_next] = -1;  
            }
        }
        return false;
    }
