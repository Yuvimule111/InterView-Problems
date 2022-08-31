// Unique Elements in Matrix

let R = 4, C = 4;

// Function that Calculate
// Unique Element
function unique(mat, n, m)
{
    let maximum = 0, flag = 0;
    for(var i = 0; i < n; i++)
    for(var j = 0; j < m; j++)


    // Find maximum elemnt in a matrix
    if(maximum < mat[i][j])
     maximum = mat[i][j];

     // Take 1-D array of (maximum + 1) size
     let b = Array(maximum + 1).fill(0);
     for(var i = 0; i < n; i++)
     for(var j = 0; j < m; j++)
     b[mat[i][j]]++;

     // Print unique element
     for(var i = 1; i <= maximum; i++)
     if(b[i] == 1)
     console.log(i + " ");
     flag = 1;

     if(flag == 0)
     {
        console.log("No unique Element Found");
     }
}

// Input array
var mat =[[11, 2, 2, 20],
           [5, 16 , 20, 7],
           [1, 13, 5, 16],
           [6, 7, 18, 15]];

// Execute The Logic
unique(mat, R, C);
