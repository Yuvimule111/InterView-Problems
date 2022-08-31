// Cyclicaly Rottate

function shiftCycalically(arr, n) {
    let i = 0;
    let j = n -1;
    while(i != j) {
        let temp;

        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i  = i + 1;
    }
}

let arr = [3, 88, 21, 5, 6];
let n = arr.length;

console.log("Given Arry is <br>");
for(let i = 0; i < n; i++)
    console.log(arr[i] + " ");


    shiftCycalically(arr, n);

    console.log("<br> output array is <br>");
    for(let i = 0; i < n; i++)
    console.log(arr[i] + " ");
