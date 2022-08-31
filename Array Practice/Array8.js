// Merge K Sorted Arrays

function mergeKArrays(arr, a, outPut) {
    let c = 0;
    let k = 0;
    for (i = 0; i < a; i++) {
        for( j = 0; j < 4; j++) {
            outPut[k++] = arr[i][j];
        }
    }

    outPut.sort ((a, b) => a - b);
}

let arr = [[2, 5, 6, 8],
           [1, 4, 7, 9],
           [0, 10, 11, 12]
          ];

          
let k = 4;
var n = 3;
let outPut = Array(n * k).fill(0);

mergeKArrays(arr, n, outPut);

console.log("Merged Sorted array is");
printArray(outPut, n * k);

var n = 4

function mergeKArrays(arr1, arr2, n1, n2, arr3) {
    let i = 0,
        j = 0,
        k = 0;

        while(i < n && j < n2) {
            if(arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
            else
            arr3[k++] = arr2[j++];
        }
        while(i < n1)
        arr3[k++] = arr1[i++];

        while(j < n2)
        arr3[k++] = arr21[j++];
}

function print(arr, size) {
    for(let i = 0; i < size; i++)
    console.log(arr[i] + " ");
}

function mergeKArrays(arr, i, j, outPut) {

    if(i == j) {
        for(let p = 0; p < n; p++)
        outPut[p] = arr[i][p];

        return;
    }

    if( j - i == 1) {
        mergeKArrays(arr[i], arr[j]),
        n, n, outPut;
        return;

    }

    let out1 = new Array(n * (((i + j) / 2) - i + 1))
    let out2 = new Array(n * (j - ((i + j) / 2)));

    mergeKArrays(arr, i, (i + j) / 2, out1);
    mergeKArrays(arr, (i + j) / 2 + 1, j, out2);

    mergeKArrays(out1, out2,
        n = (((i + j) / 2) - i + 1),
         n = (j - ((i + j) / 2)), outPut);

}