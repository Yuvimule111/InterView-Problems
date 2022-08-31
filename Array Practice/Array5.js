// SubArray withsum x

function subArrayWithSum(arr, sum) {
    let n = arr.length;
    let currentSum = 0;
    let start = 0;
    let end = -1;
    let map = new Map();

    for(let i = 0; i < n; i++) {
        currentSum = currentSum + arr[i];

        if(currentSum - sum == 0) {
            start = 0;
            end = i;
            break;
        }

        if(map.has(currentSum - sum)) {
            start = map.get(currentSum - sum) + 1;
            end = i;
            break;
        }

        map.set(currentSum, i);
}

if(end == -1) {
    console.log("No Subarray with given sum exists");
}
else {
    console.log("Subarray having sum between indexes" + start + "to" + end);

}
}

let arr = [2, 4, -1, -2, 4, -5, 5];
let sum = 6;
subArrayWithSum(arr, sum);
