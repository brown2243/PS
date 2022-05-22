// 위클리 챌린지 8주차 최소직사각형
// 문제 해결책이 안떠올라서 그렇지 쉬운 문제
function solution(sizes) {
    return sizes.
        reduce((acc, cur) => {
            const a = Math.max(acc[0], Math.max(cur[0], cur[1]))
            const b = Math.max(acc[0], Math.min(cur[0], cur[1]))
            return [a, b]
        }, [0, 0])
        .reduce((acc, cur) => acc * cur)
}

// 위클리 챌린지 7주차 입실 퇴실
// 어려웠던 문제, 특이하게 푼 것 같다.
function solution(enter, leave) {
    const N = enter.length
    const ans = Array.from({ length: N }, () => new Set())
    const room = []

    for (let i = 0; i < N; i++) {
        room.push(enter[i])
        if (room.length > 1) {
            room.forEach(member => {
                room.forEach(mem => {
                    ans[member - 1].add(mem)
                })
            })
        }
        while (true) {
            if (room.includes(leave[0])) {
                room.splice(room.indexOf(leave[0]), 1)
                leave.shift()
            } else {
                break
            }
        }
    }
    return ans.map(v => v.size === 0 ? 0 : v.size - 1)
}
// 다른사람풀이



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

// 위클리 챌린지 6주차
// 복서 정렬하기
// 정렬이 짜증나는 문제
function solution(weights, head2head) {
    const ans = [];
    head2head.forEach((head, idx) => {
        const tmp = head.split('')
        const info = {}
        info.weight = weights[idx]
        info.idx = idx
        info.winToBig = 0
        info.battle = 0
        info.win = 0
        tmp.forEach((fight, i) => {
            if (fight === 'N') { }
            else if (fight === 'L') info.battle += 1
            else if (fight === 'W') {
                info.battle += 1
                info.win += 1
                if (info.weight < weights[i]) info.winToBig += 1
            }
        })
        ans.push(info)
    })
    // 아래 내용 적용
    return ans.sort((a, b) => {
        if (a.win / a.battle > b.win / b.battle) return -1
        if (a.win / a.battle < b.win / b.battle) return 1
        if (a.winToBig > b.winToBig) return -1
        if (a.winToBig < b.winToBig) return 1
        if (a.weight > b.weight) return -1
        if (a.weight < b.weight) return 1
        if (a.idx < b.idx) return -1
        if (a.idx > b.idx) return 1
    }).map(({ idx }) => idx + 1)

    return ans.sort((a, b) => {
        if (a.win / a.battle > b.win / b.battle) {
            return -1
        } else if (a.win / a.battle < b.win / b.battle) {
            return 1
        } else {
            if (a.winToBig > b.winToBig) {
                return -1
            } else if (a.winToBig < b.winToBig) {
                return 1
            } else {
                if (a.weight > b.weight) {
                    return -1
                } else if (a.weight < b.weight) {
                    return 1
                } else {
                    if (a.idx < b.idx) {
                        return -1
                    } else if (a.idx > b.idx) {
                        return 1
                    }
                }
            }
        }
    }).map(({ idx }) => idx + 1)
}

// 다른사람 풀이
// 같은 방식인데 정렬만 이렇게 써도 훨씬 깔끔할 것 같다.
function compareFunc(a, b) {
    if (a.winRate < b.winRate) return 1;
    if (a.winRate > b.winRate) return -1;
    if (a.winToHeavy < b.winToHeavy) return 1;
    if (a.winToHeavy > b.winToHeavy) return -1;
    if (a.weight < b.weight) return 1;
    if (a.weight > b.weight) return -1;
    return a.idx - b.idx

}
answer = records.sort(compareFunc).map(v => v.idx)
// 다른 방식
function solution(weights, head2head) {
    return head2head.map((l, i) => l.split('').reduce((acc, v, j) => {
        acc[0] += v === 'W' ? 1 : 0;
        acc[1] += v === 'W' ? weights[i] < weights[j] ? 1 : 0 : 0;
        acc[2] += v === 'L' ? 1 : 0
        return acc;
    }, [0, 0, 0])
    )
        .map((v) => [v[0] / (v[0] + v[2]), v[1]])
        .map((v, i) => [i + 1, { t: v[0], s: v[1], w: weights[i] }])
        .sort((a, b) => b[1].t - a[1].t || b[1].s - a[1].s || b[1].w - a[1].w || a[0] - b[0])
        .map((v) => v[0]);
}
