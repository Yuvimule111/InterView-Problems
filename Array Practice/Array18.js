// Sparse Array
let MAX = 100;

function verifySparse(array, m, n)
{
    let counter = 0;

    for(let i = 0; i < m; ++i)
     for(let j = 0; j < n; ++j)
      if(array[i][j] == 0)
      ++counter;

    return (counter > parseInt((m * n) / 2), 10);  
}

let array = [[11, 0, 31],
             [10, 0, 24],
             [16, 0, 0]];




let m = 3;
n = 3;

if(verifySparse(array, m, n))
console.log("True");
else
console.log("False");




