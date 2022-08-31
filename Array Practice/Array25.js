// Spiral Matrix


function spiralPrint(f, h, arr) {
    let i, e = 0;
    g = 0;

    while(e < f && g < h) {
        for(i = g; i < h; ++i) {
            console.log(arr[e][i] + " ");
        }
        e++;

        for(i = e; i < f; ++i) {
            console.log(arr[i][n - 1] + " ");
        }
        h--;

        if(e < f) {
            for(i = n - 1; i >= g; --i) {
                console.log(arr[f - 1][i] + " ");
            }
            f--
        }

        if( g < h) {
            for(i = f - 1; i >= e; --i) {
                console.log(arr[i][0] + " ");
            }
            g++;
        }
    }
}

