// function to find maximum number in the array
// Args : array of numbers

export let findMax = (testArr) => { // [2,3,4]
    if (!Array.isArray(testArr)) {
        return "Please Pass Array"
    }
    let maxNum = Number.NEGATIVE_INFINITY
    testArr.forEach(element => {
        if (element > maxNum) {
            maxNum = element
        }
    });
    return maxNum;
}

export let findCommonEle = (firstArr, secondArr) => {
    if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
        return "Arguments should be arrays"
    }
    let combinedArr = [...firstArr, ...secondArr]
    let newArr = []
    combinedArr.forEach(ele => {
        if (newArr.indexOf(ele) == -1) {
            newArr.push(ele)
        }
    })
    return newArr;
}

export let findCommonElem = (arrOne, arrTwo) => arrOne.filter(ele => arrTwo.indexOf(ele) != -1)





