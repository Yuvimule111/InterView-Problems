// Shift negative Elements (constant Space)

function shiftNegativeElements(arr, left, right) 
{
    while(left <= right)
    {
    if(arr[left] < 0 && arr[right] < 0)
      right--;

    else if(arr[left] < 0 && arr[right] > 0)
    {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }  


    else if (arr[left] > 0 && arr[right] > 0)
      left++;
     else
     {
        left++;
        right--;
     } 
}

}

function print(arr, right)
{
    for(i = 0; i <= right; ++i)
    console.log(arr[i]);
}

let arr = [-112, 111, -113, -15, 16, -27, 15, -13, 11];

let arrSize = arr.length;

shiftNegativeElements(arr, 0, arrSize - 1);
print(arr, arrSize - 1);
