// Triplet with Given sum

const { conforms } = require("lodash");

function findTriplet(A, arr_size, sum)
{
    let l, r;

    A.sort((a, b) => a - b);
    for(let i = 0; i < arr_size - 2; i++) {

        l = i + 1;

        r = arr_size - 1;
        while(l < r) {
            if(A[i] + A[l] + A[r] == sum)
            {
                console.log("Triplet is " + A[i] + "," + A[l] + "," + A[r]);
                return true;
            }
            else if(A[i] + A[l] + A[r] < sum)
            l++;
            else
            r--;
        }
    }

    return false;
}


let A = [1, 2, 5, 6, 7, 8, 3];
let sum = 8;
let arr_size = A.length;
findTriplet(A, arr_size);


