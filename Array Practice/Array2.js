const AlienLanguage = (lang, arr) => {
    const langArr = lang.split('');
    const langObj = {};
    const unSortedObj = {};
    const letterToNum = [];
    const sortedArr = [];
    langArr.map((item, index) => langObj[item] = (index + 1));
    arr.map(item => {
        let num = ''
        item.split('').map(letr => {
            num += langObj[letr];
        })
        letterToNum.push(parseInt(num));
        unSortedObj[parseInt(num)] = item;
    })
    quickSort(letterToNum);
    letterToNum.map(item => {
        sortedArr.push(unSortedObj[item]);
    })
    return sortedArr;
}


const quickSort = (arr) => {
    const end = arr.length - 1;
    const start = 0;
    sortArray(arr, start, end)
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

const sortArray = (arr, low, high) => {
    if(low >= high) {
        return;

    }
    let start = low;
    let end = high;
    const mid = Math.floor((start + end) / 2);
    const pivot = arr[low];

    while(arr[end] > pivot) {
        
    }
}