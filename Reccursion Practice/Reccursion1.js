// rteverse String


function reverse(str, i) {
    var n = str.length;

    if(i >= n / 2) {
        output = str.join("");
        console.log(output);
        return;
    } 
     str = swap(str, i, n - i - 1);

     reverse(str, i + 1);
}

    function  swap (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }

    var str1 = "unacademy"
    str = Array.from(str1)
    reverse(str, 0);

