// Find the Greatest Product 

function greatestProduct(arr, n) {

    let m = new Map();
    for(let i = 0; i < n; i++) {
       if(m.has(arr[i])) {
        m.set(arr[i], m[arr[i]] + 1);
       }
       else
       {
        m.set(arr[i], m.get(arr[i]));
       }
    }

    arr.sort(function(a, b) {return a - b;});

    for (let i = n - 1; i > 1; i--) {
        for (let j = 0; j < i && arr[j] <= Math.sqrt(arr[i]); j++) {
            if(arr[i] % arr[j] == 0) {
                let result = Math.floor(arr[i] / arr[j]);

                if(result != arr[j] && m[result] == null || m[result] > 0) {
                    return arr[i];
                }

                else if (result == arr[j] && m[result] > 1) {
                    return arr[i];
                }
            }
        }
    }

    return -1;
}