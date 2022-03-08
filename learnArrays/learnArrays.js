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

export let removeDuplicateNumbers = (firstArr, secondArr) => {
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

// Finding most repated number in the array

export let mostRepNum = arr => {
    let testObj = {}
    let maxRepNum;
    let maxRepCount = Number.NEGATIVE_INFINITY;
    arr.forEach(ele => {
        testObj[ele] ? testObj[ele] += 1 : testObj[ele] = 1
    })
    for (let num in testObj) {
        if (testObj[num] > maxRepCount) {
            maxRepNum = [num]
            maxRepCount = testObj[num]
        } else if (testObj[num] == maxRepCount) {
            maxRepNum.push(num)
        }
    }
    return maxRepNum
}







