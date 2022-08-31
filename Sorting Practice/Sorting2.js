function merge(A, n) {

    let half_i = 0;

    let temp = new Array(n);
    temp.fill(0);

    for(let i = 0; i < n - 1; i++) {
        if(A[i] > A[i + 1]) {
            half_i = i + 1;
            break;
        }
    }

    if(half_i == 0)
    return;

    let i = 0, j = half_i, k =0;
    while(i < half_i && j < n) {
        if(A[i] < A[j])
          temp[k++] = A[i++];
        else
          temp[k++] = A[j++];
    }

    while (i < half_i)
     temp[k++] = A[i++];

     while(j < n)
      temp[k++] = A[j++];

      for(let i = 0; i < n; i++)
      A[i] = temp[i];
}

let A = [1, 4, 5, 2, 3, 6];
let n = A.length;
merge(A, n);

for(let i = 0; i <n; i++)
console.log(A[i] + " ");
