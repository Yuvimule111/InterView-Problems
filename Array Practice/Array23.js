// Miximize PairWise Sum

function findMaxPair(arr) {
    arr.sort((a ,b) => (a - b));
    let ans = 0;
    for(let i = 0; i < arr.length; i = 1 + 2) {
        ans += arr[i];
    }
    return ans;
};

arr = [1, 3, 4, 5, 6, 7, 8];
console.log(findMaxPair(arr));
