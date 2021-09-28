function solution(sizes) {
    const wallet = [0, 0]
    sizes.forEach(size => {
        wallet[0] = Math.max(wallet[0], Math.max(size[0], size[1]))
        wallet[1] = Math.max(wallet[1], Math.max(size[0], size[1]))
    })
    return wallet[0] * wallet[1]
}

function solution(sizes) {
    return sizes.
        reduce((acc, cur) => {
            const a = Math.max(acc[0], Math.max(cur[0], cur[1]))
            const b = Math.max(acc[0], Math.min(cur[0], cur[1]))
            return [a, b]
        }, [0, 0])
        .reduce((acc, cur) => acc * cur)
}