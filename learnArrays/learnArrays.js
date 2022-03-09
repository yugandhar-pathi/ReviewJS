// function to find maximum number in the array
// Args : array of numbers

export const findMax = (testArr) => { // [2,3,4]
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

export const removeDuplicateNumbers = (firstArr, secondArr) => {
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

export const findCommonElem = (arrOne, arrTwo) => arrOne.filter(ele => arrTwo.indexOf(ele) != -1)

// Finding most repated number in the array

export const mostRepNum = arr => {
    let testObj = {}
    let mostRepNum;
    let mostRepCount = Number.NEGATIVE_INFINITY;
    arr.forEach(ele => {
        testObj[ele] ? testObj[ele] += 1 : testObj[ele] = 1
    })
    console.log(testObj)
    for (let num in testObj) {
        if (testObj[num] > mostRepCount) {
            mostRepCount = testObj[num]
            mostRepNum = [num]
        } else if (testObj[num] == mostRepCount) {
            mostRepNum.push(num)
        }
    }
    return mostRepNum
}

// Find numbers greater 2 in the given 2 arrays(no duplicates) using filter

export const greaterThanTwo = (arrOne, arrTwo) => {
    if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
        return "input should be arrays"
    }
    if (arrOne.length == 0 || arrTwo.length == 0) {
        return "Arrays should not be empty"
    }
    let combinedArray = [...arrOne, ...arrTwo]
    let combUniqArr = []
    combinedArray.forEach(ele => {
        (combUniqArr.indexOf(ele) == -1) ? combUniqArr.push(ele) : ""
    })
    let finRes = combUniqArr.filter(ele => ele > 3)
    return finRes
}

//Add two to all numbers in the array using map
export const addNum = arr => arr.map((num) => num + 2)




