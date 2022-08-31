// Reverse Pyramid

let rows = 6;

for(i = 1; i <= rows; i++) {

    for(j = 1; j < i; j++) {

        console.log("&nbsp;");
    }
    for(j = i; j<= rows; j++) {

        console.log(j + " ");
    }
    console.log("<br>");
}

