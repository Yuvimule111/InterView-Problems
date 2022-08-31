// Sort array frequency

let arr = [2, 5, 6, 7, 7, 8, 6, 8, 7];

function sortFrequnency(list) {

    let n = arr.length;
    let mapcount = new Map();
    let mapindex = new Map();

    for(let i = 0; i < n; i++) {
        if(mapcount.has(arr[i])) {
            mapcount.set(arr[i],
                 mapcount.get(arr[i]) + 1);
        }
        else{
            mapcount.set(arr[i], 1);
            mapcount.set(arr[i], i);
        }
    }

    list.sort(function(n1, n2) {

        let freq1 = mapcount.get(n1);
        let freq2 = mapcount.get(n2);
        if(freq1 != freq2) {
            return freq2 - freq1;
        }
        else {
            return mapcount.get(n1)
            - mapindex.get(n2);
        }
    });
    console.log(list.join(" "));
}

sortFrequnency(arr);
