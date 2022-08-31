// Fibonacci SubSet

function findSubSet(arr, n) {

    let max = arr.reduce((a, b) => Math.max(a, b))

    let a = 0,
        b =1;

        let hash = new Set();
        hash.add(a);
        hash.add(b);
        while(b < max) {
            let c = a + b;
            a = b;
            b = c;
            hash.add(b);
        }

        for(let i = 0; i < n; i++) 
          if(hash.has(arr[i]))
          console.log(arr[i] + " ");
          
    }