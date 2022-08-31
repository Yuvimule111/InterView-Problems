// Common Element in Arrays

function common(arr1, arr2, arr3, n1, n2, n3) {
    
    let max = Number.MIN_VALUE;

    let res1 = 1;
    for(let i = 1; i < n1; i++) {
        max = Math.max(arr1[i], max);
        if(arr1[i] != arr1[res1 - 1]) {
            arr1[res1] = arr1[i];
            res1++;
        }
    }
    let res2 = 1;
    for (let i = 1; i < n2; i++) {
        max = Math.max(arr2[i], max);
        if(arr2[i] != arr2[res2 - 1]) {
            arr2[res2] = arr2[i];
            res2++;
        }
    }     

    let res3 = 1;
    for (let i = 1; i < n3; i++) {
        max= Math.max(arr3[i], max);
        if(arr3[i] != arr3[res3 - 1]) {
            arr3[res3] = arr3[i];
            res3++;
        }
    }

    let freq = Array(max + 1).fill(0);
    for(i = 0; i < res1; i++)
       freq[arr1[i]]++;
    for(i = 0; i < res2; i++)
       freq[arr2[i]]++;
    for(i = 0; i < res3; i++) 
       freq[arr3[i]]++;
       
       
       for(i = 0; i <= max; i++)
       if(freq[i] == 3)
          console.log(i + " ");
    
}