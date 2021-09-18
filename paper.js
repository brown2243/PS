function solution(enter, leave) {
    const N = enter.length
    const ans = Array.from({ length: N }, () => new Set())
    const room = []

    for (let i = 0; i < N; i++) {
        room.push(enter[i])
        if (room.length > 1) {
            room.forEach(member => {
                room.forEach(member => {
                })

                ans[member - 1]
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
    console.log(room)
}


function solution(enter, leave) {
    const N = enter.length
    const ans = Array.from({ length: N }, () => new Set())

    for (let i = 0; i < N; i++) {
        // i번째 사람보다 먼저 들어온 사람
        const fastEnter = enter.slice(0, i)
        let flag = false
        // i번째 사람보다 늦게 나간 사람
        const lateLeave = leave.slice(leave.indexOf(enter[i]) + 1, N)
        console.log('fastEnter', fastEnter)
        console.log('lateLeave', lateLeave)
        lateLeave.forEach(v => {
            if (fastEnter.includes(v)) {
                ans[i - 1].add(v)
                ans[v - 1].add(i)
            }
        })
    }
    console.log(ans.map(v => Array.from(v)))
    return ans.map(v => v.size)
}