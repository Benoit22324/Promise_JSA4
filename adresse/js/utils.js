export const waitFor = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time)
        }, time * 1000)
    })
}