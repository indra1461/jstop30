function maxProfit(arr){
let minPrice = Infinity;
let maxProfit = 0

for(let i = 0;arr.length > i;i++){
    let current = arr[i];
    if(current < minPrice){
        minPrice = current;
    }
    let profit = current -minPrice

    if(profit > maxProfit){
        maxProfit = profit
    }
}

return maxProfit

}

console.log(maxProfit([1,2,3,4,5,6,7,8,9,10]));