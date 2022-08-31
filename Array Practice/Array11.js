// Equal Array Elements

function minCost(a, n) {

    let y;

    if(n % 2 == 1)
    y = a[Math.trunc(n / 2)];

    else
    y = Math.trunc((a[n / 2] + a[(n - 2) / 2]) / 2);

    let s = 0;

    for(let i = 0; i < n; i++)
    s += Math.abs(a[i] - y);

    return s;
}

let a= [1, 200, 11];
let n = a.length;

console.log(minCost(a, n));
