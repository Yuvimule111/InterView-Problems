// Pair sum if Clod=sest Target

function closest(arr, n, x) {

    let res_l = 0, res_r = 0;

    let l = 0, r = n - 1, diff = Number.MAX_VALUE;

    while(r > l) {

        if(Math.abs(arr[l] + arr[r] - x) < diff) {

            res_l = l;
            res_r = r;
            diff = Math.abs(arr[l] + arr[r] - x);
        }

        if(arr[l] + arr[r] > x)
        r--;
        else
        l++;
    }

    console.log("The closest pair is" + arr[res_l] + "and" + arr[res_r]);
}


let arr = [112, 134, 110, 16,   140], x = 200;
let n = arr.length;
closest(arr, n, x);
