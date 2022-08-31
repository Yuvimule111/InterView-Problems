function sortArray(arr, n) {

    let evenArr = [];
    let oddArr = [];

    for(let i = 0; i < n; i++) {
        if(i % 2 != 1) {
            evenArr.push(arr[i]);
        }
        else{
            oddArr.push(arr[i]);
        }
    }

    evenArr.sort(function(a, b){return a - b;});
    oddArr.sort(function(a, b){return b - a;});

    let i = 0;
    for(let j = 0; j < evenArr.length; j++) {
        arr[i ++] = oddArr[j];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8 ];
let n = arr.length;
sortArray(arr, n);
for(let i = 0; i <n; i++) {
    console.log(arr[i] + " ");
}
