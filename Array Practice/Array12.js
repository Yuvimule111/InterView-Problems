// Pair Element Sum

const { chain } = require("lodash");

function cheak(arr, n)
{

    let sum = 0;
    for(let i = 0; i < n; i++)
    {
        sum += arr[i];
    }

    if(sum % 2 != 0)
    {
        return false;
    }

    sum = Math.floor(sum / 2);

    let s = new Set();
    for(let i = 0; i < n; i++)
    {
        let val = sum - arr[i];


        if(!s.has(arr[i]))
        {
            s.add(arr[i])
        }

        if(s.has(val))
        {
            console.log("Pair Elements are" + arr[i] + "and" + val);
            return true;
        }
        s.add(arr[i]);
    }
    return false;
}

let arr = [12, 2, 3, 4, 6, 1];
let n = arr.length;
if(cheak(arr, n) == false)
{
    console.log("No Pair");
}