// 위클리 챌린지 5주차 모음 사전
// 백트래킹문제라고 생각했음
function solution(word) {
    const arr = ['A', 'E', 'I', 'O', 'U'], N = arr.length
    const ans = []
    const str = []

    function backtracking(str) {
        if (str.length === 5) {
            return
        } else {
            for (let i = 0; i < N; i++) {
                str.push(arr[i])
                ans.push(str.join(''))
                backtracking(str)
                str.pop()
            }
        }
    }

    backtracking(str)
    return ans.indexOf(word) + 1
}
// 다른사람 풀이
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}
//////////////////////////////