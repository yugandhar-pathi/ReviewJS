export const sortArrays = arr => {
    let val;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                val = arr[i]
                arr[i] = arr[j]
                arr[j] = val
            }
        }
    }
    return arr;
}