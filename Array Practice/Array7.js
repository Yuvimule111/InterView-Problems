// Count Pairs With Given Sum

let arr = [1, 2, 5, 6, 7, 8, 3];

function pairsCount(n, sum) {
    let hm = new Map();

    for (let i = 0; i < n; i++) {
        
        if(!hm.has(arr[i]))
        hm.set(arr[i], 0);

        hm.set(arr[i], hm.get(sum - arr[i]));
    }

    let count = 0;

    for(i = 0; i < n; i++) {
        if(hm.get(sum - arr[i]) != null)
        count += hm.get(sum - arr[i]);

        if (sum - arr[i] == arr[i])
        count--;
    }
    return count / 2;
}

let sum = 3;
console.log("Count of Pairs is " + pairsCount(arr.length, sum));
