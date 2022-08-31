// Consequtive Numbers Addition

function consequtive(N) {

    let start = 1, end = Math.trunc((N + 1) / 2);

    while(start < end) {
        let sum  = 0;
        for(let i = start; i <= end; i++) {
            sum = sum + i;

            if(sum == N) {

                for(let j = start; j <= i; j++)
                 console.log(j + " ");

                 console.log();
                 break;
            }

            if(sum > N)
             break;
        }
        sum = 0;
        start++;
    }
}

let N = 15;
consequtive(N);
