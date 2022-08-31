 // Digonal Matrix

 function cheakMatrixDigonal(A)
 { 
    for(let i = 0; i < A.length; i++)
    for(let j = 0; j < A.length; j++)
    if((i != j) && (A[i][j] != 0))
    return false;

    return true;
 }

 let A = [[0, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
         ]


console.log(cheakMatrixDigonal(A));
         