// Frequency of Character

function countOccurence(ch, s) {

    if(s.length == 0)
    return 0;
    var count = 0;

    if(s[0] == ch)
    count++;

    count += countOccurence(ch, s.substring(1));

    return count
}

var str = "Unacademy";
var c = "a";
console.log("Frequnency of Chapter" + c + "is" + countOccurence(c, str));
