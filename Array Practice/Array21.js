// Maximum Profit 

function maximumProfit(prices, size) {

    let maxProfit = 0;

    for(i = 1; i < size; i++)
     if(prices[i] > prices[i - 1])
      maxProfit += prices[i] - prices[i - 1];
    return maxProfit;  
}

let price = [100, 180, 260, 310, 40, 535,   695];
let n = price.length;

// Function Call

console.log(maximumProfit(price, n));
