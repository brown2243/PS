// 598
// Range Addition II
var maxCount = function (m, n, ops) {
    for (let op of ops) {
        m = Math.min(m, op[0])
        n = Math.min(n, op[1])
    }
    return m * n
}