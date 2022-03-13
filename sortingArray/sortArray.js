export const sortArrays = (arr, str) => {
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
    if (str == "dsc") {
        return arr;
    } else if (str == "asc") {
        let ascOrder = arr.reverse()
        return ascOrder;
    }
}

// Find max number in the nested array
export const findMax = arr => {
    let flattendArr = arr.flat(Infinity) //if we know how many levels we want to flat the array we can give number too. In this case it is 2. 
    let maxNum = Number.NEGATIVE_INFINITY;
    flattendArr.forEach(num => {
        if (num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum
}

//Find the longest word in the sentence
export const findLongWord = str => {
    const strArr = str.split(" ")
    let wordLen = Number.NEGATIVE_INFINITY;
    let bigWord;
    strArr.forEach(ele => {
        if (ele.length > wordLen) {
            wordLen = ele.length;
            bigWord = ele;
        }
    })
    return bigWord;
}
