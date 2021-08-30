

// 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
    let min = prices[0]
    let profit = 0

    for (let i = 1, N = prices.length; i < N; i++) {
        if (prices[i] < min) min = prices[i]
        else {
            let pro = prices[i] - min
            if (profit < pro) profit = pro
        }
    }
    return profit
};
// 2중 반복문이라 시간 초과
// var maxProfit = function(prices) {
//     let profit = 0

//     for(let i = 1, N = prices.length; i < N; i++){
//         let pro = 0
//         for(let j = 0; j < i; j++){
//             const tmp = prices[i] - prices[j]
//             if(pro < tmp) pro = tmp
//         }
//         if(profit < pro) profit = pro
//     }
//     return profit
// };


