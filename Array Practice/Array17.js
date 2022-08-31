// Pair With Given Difference

function findPair(arr, size, n)
{
    let map = new Map();
    for(let i = 0; i < size; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else map.set(arr[i], 1)
    }
    for(let i = 0; i < size; i++) {
        if(map.has(n + arr[i])) {
            console.log("Pair Found : (" + arr[i] + "," + (n + arr[i]) + ")");
            return true;
        }
    }

    console.log("No Pair");
    return false;
}

let arr = [1, 3, 4, 5, 6, 7, 8];
let size = arr.length;
let n = 3;
findPair(arr, size, n);
