// Coloumn Wise Addition in MAtrix

let M = 4, N = 3;

const A = [[3,4,5,],[3,4,2],[2,3,4],[4,4,4]]
let col_sum = [];

for(let idx = 0; idx < N; idx++) {
    let sum_ = 0

    for(let idx2 = 0; idx2 < M; idx2++) {
        sum_ += A[idx2][idx];
    }
    col_sum.push(sum_);
}

console.log(col_sum);
