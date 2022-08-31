// Generate Binary Strings

function toString(a) {
    var string = new Array(a);
    return string;
}

function genStr(k, ch, n) {

    if(n == k) {
        console.log(toString(ch) + " ");
        return;
    }

    if(ch[n - 1] == "0") {
        ch[n] = "0";
        genStr(k, ch, n + 1);
        ch[n] = "1";
        genStr(k, ch, n + 1);
    }

    if(ch[n - 1] == "1") {
        ch[n] = "0";

        genStr(k, ch, n + 1);
    }
}

function fun(k) {
    if(k <= 0) {
        return;
    }

    var ch = new Array(k);
    ch[0] = '0';
    genStr(k, ch, 1);
    ch[0] = '0';
    genStr(k, ch, 1);
}
