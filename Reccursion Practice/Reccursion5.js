// String Problem

function cheakRotation(str1, str2) {

    return (str1.length == str2.length) &&
    ((str1 + str1).indexOf(str2) != -1);
}

let str1 = "ABC";
let str2 = "BCA";

if(cheakRotation(str1, str2))
 console.log("Strings are rotations of each other");
else
 console.log("strings are not rotations of each other");
  