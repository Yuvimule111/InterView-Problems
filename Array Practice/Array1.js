// Find The longest subarray in an array 

function lentghOfLongestSubArray(arr, n, k) {

    var um = new Map();
    var sum = 0, maxLen = 0;

    for(let i = 0; i < n; i++) {

        sum += arr[i];

        if(sum == k)
         maxLen = i + 1;

         if(!um.has(sum))
          um.set(sum, i);

          if(um.has(sum - k)) {

          }
    }

    return maxLen;
}

let inputArray = [110, 15, 32, 7, 11, 19];
let n = inputArray.length;
let target = 125;
console.log("Length of subArray = " + lentghOfLongestSubArray(inputArray, n, target));


// Problem No 2 : Given 2D array . A magic is a 2D 

function magicSquare(arr) {

    var N = arr.length

    var sumd1 = 0 , sumd2 = 0;
    for(var i = 0; i < N; i++)
    {

    var sumd1 = sumd1 + arr[i] [i];
    var sumd2 = sumd2 + arr[i] [N - 1 -i];
}

if(sumd1 != sumd2)
   return false;


   for(let i = 0; i < N; i++) 
   
    var colSum = 0;
    var rowSum = 0;
    for(let j = 0; j < N; j++)
{
    rowSum += arr[i][j];
    colSum += arr[i][j];
}
if(rowSum != colSum || colSum != sumd1) {
   return false;
   }
   return true;
}

let arr = [[ 2, 7, 6],
        [ 9, 5, 1],
        [ 4, 3, 8]];

        if(magicSquare(arr))
        console.log("Array is Magic Square");
        else
        console.log("Array is not a Magic Square");