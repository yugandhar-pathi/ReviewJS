export const printTable = num => {
    let res = ''
    for (let i = 1; i < 11; i++) {
        res += `${num} * ${i} = ${num * i}\n`
    }
    return res
}
console.log(printTable(2))