// Longest Common Subsequence

function longestConsequtiveSequence(arr, n) {
    let output = 0, count = 0;

    arr.sort(function(a, b) {return a - b; })

    let tempArr = [];
    tempArr.push(arr[0]);

    for(let i = 1; i < n; i++) {
        if(arr[i] != arr[i - 1])
          tempArr.push(arr[i]);
    }

    for(let i = 0; i < tempArr.length; i++) {

        if(i > 0 && tempArr[i] == tempArr[i - 1] + 1)
        count++;

        else
          count = 1;

          output = Math.max(output, count);
    }
    return output;
}


let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
let n = arr.length;
console.log(
    "Length of the Longest Consecutive Sequence is "
    + longestConsequtiveSequence(arr, n)
);
