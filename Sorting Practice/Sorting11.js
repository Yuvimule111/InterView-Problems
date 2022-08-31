// Kth Smallest Number in Array

function partion(arr, l, r) {

    var x = arr[r], i = l;
    for(j = l; j <= r - 1; j++) {
        if(arr[j] <= x) {
            var temp = arr[i];
            rr[i] = arr[j];
            arr[j] = temp;

            i++;
        }    
    }

    var temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;

    return i;
}

function kthSmallest(arr, l, r, k) {

    if(k > 0 && k <= r - l + 1) {

        var pos = partion(arr, l, r);

        if(pos - 1 == k - 1)
         return kthSmallest(arr, l, pos - 1, k);

         return kthSmallest(arr, pos + 1, r, k - pos + l - 1);
    }
    return Number.MAX_VALUE;
}
