// Largest Pair Sum

function findLarest(arr)
{
    let first , second;
    if(arr[0] > arr[1])
    {
        first = arr[0];
        second = arr[1];
    }
    else
    {
        first = arr[1];
        second = arr[0];
    }

    for (let i = 2; i < arr.length; i++)
    {
        if (arr[i] > first)
        {
            second = first;
            first = arr[i];
        }

        else if (arr[i] > second && arr[i] != first)
           second = arr[i];
    }
    return (first + second);
}

let arr1 = [112, 134, 110, 16, 140];
console.log("Maximum Pair sum is" + findLarest(arr1));
