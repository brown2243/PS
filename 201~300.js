
// 238 https://leetcode.com/problems/product-of-array-except-self/
var productExceptSelf = function (nums) {
    const N = nums.length
    const firstZero = nums.indexOf(0)
    const lastZero = nums.lastIndexOf(0)

    if (firstZero !== lastZero) return new Array(N).fill(0)

    if (firstZero > -1) {
        const mul = nums.reduce((acc, cur, idx) => {
            if (idx === firstZero) return acc
            return acc * cur
        }, 1)
        const arr = new Array(N).fill(0)
        arr[firstZero] = mul
        return arr
    }

    const mul = nums.reduce((acc, cur) => acc * cur, 1)
    const arr = []
    for (let i = 0; i < N; i++) {
        arr.push(mul / nums[i])
    }
    return arr
};
// 다른 사람의 빠른 답변
var productExceptSelf = function (nums) {
    let result = Array(nums.length).fill(1);

    let prefix = 1;
    let postfix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * postfix;
        postfix = postfix * nums[i];
    }
    return result;
};