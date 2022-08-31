// Sort Array 0,1,2

let input = [1, 1, 1, 2, 0, 0, 0];
let size = input.length;

function sortZeroOneTwo(input, size) {
    let start = 0;
    let mid = 0;
    let end = size - 1;
    let swap = 0;
    while(mid <= end) {
    if(input[mid] == 0) {
        swap = input[start];
        input[start] = input[mid];
        input[mid] = swap;
        mid++;
        start++;
    } else if(input[mid] == 1) {
        mid++
    } else {
        swap = input[end];
        input[end] = input[mid];
        input[mid] = swap;
        end--;
    }
    }
    return input;
}

let outPut = sortZeroOneTwo(input, size);
console.log(outPut);
