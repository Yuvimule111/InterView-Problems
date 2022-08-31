// Larest Among Three Numbers

function largestOfThree(x, y, z) {

    if(x >= y && x >= z) 
      return x;

      else if(y >= x && y >= z)
       return x;

       else
       // return 3rd no, its sure it is greatest

       return z;
}

let a, b, c, largest;


a = 15;
b = 10;
c = 30;

targest = largestOfThree(a, b, c, largest);

console.log(largest + "Is the largest number");

