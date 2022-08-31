/*
function minDiffrence(arr ,N, K) {

    arr.sort((a, b => a - b));

    let res = 2147483647;

    for (let i = 0; i <= (N - K); i++) {

        let curSeqDiff = arr[i + K - 1] - arr[i];
        res = Math.min(res, curSeqDiff);
    }

    return res;
}

let arr = [10, 21, 13, 11, 1, 5];
  let N = arr.length;

  let K = 3;
  console.log(
    minDiffrence(arr, N, K));

    */

    function minDifference(arr, N, K)
	{

		arr.sort((a, b) => a - b);
	
		let res = 2147483647;

		for (let i = 0; i <= (N - K); i++)
		{
			
			let curSeqDiff = arr[i + K - 1] - arr[i];
			res = Math.min(res, curSeqDiff);
		}
	
		return res;
	}


	let arr = [10, 21, 13, 11, 1, 5];
		let N = arr.length;
	
		let K = 3;
		console.log(
			minDifference(arr, N, K));
