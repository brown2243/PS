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
    ans.sort((a, b) => {
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
                    if (a.idx > b.idx) {
                        return -1
                    } else if (a.idx < b.idx) {
                        return 1
                    }
                }
            }
        }
    })
}
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];
// items.sort(function (a, b) {
//     if (a.value > b.value) {
//         return 1;
//     }
//     if (a.value < b.value) {
//         return -1;
//     }
//     // a must be equal to b
//     return 0;
// });
// console.log(items)