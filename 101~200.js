

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


// 153. Find Minimum in Rotated Sorted Array
var findMin = function (nums) {
    return nums.sort((a, b) => a - b)[0]
};
var findMin = function (nums) {
    return Math.min(...nums)
};
// 각 언어들의 정렬알고리즘은 이미 최적화가 되어 있기 때문에, 바로 통과했지만 다른 답들을 보면 이분탐색을 해서 통과해야하는 듯
var findMin = function (nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    // initializing left and right pointers.
    let left = 0, right = nums.length - 1;

    // if the last element is greater than the first element then there is no rotation.
    // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
    // Hence the smallest element is first element. A[0]
    if (nums[right] > nums[0]) {
        return nums[0];
    }

    // Binary search way
    while (right >= left) {
        // Find the mid element
        mid = left + Math.floor((right - left) / 2);

        // if the mid element is greater than its next element then mid+1 element is the smallest
        // This point would be the point of change. From higher to lower value.
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        // if the mid element is lesser than its previous element then mid element is the smallest
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        // if the mid elements value is greater than the 0th element this means
        // the least value is still somewhere to the right as we are still dealing with elements
        // greater than nums[0]
        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            // if nums[0] is greater than the mid value then this means the smallest value is somewhere to
            // the left
            right = mid - 1;
        }
    }
    return -1;
}