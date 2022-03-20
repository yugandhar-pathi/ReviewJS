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

//let test = 5!  == 5 X 4 X 3 X 2 X 1 
export const findFactorial = num => {
    let res = num;
    for (let i = 1; i < num; i++) {
        res *= (num - i)
    }
    return res;
}

const add = (a, b) => a + b

console.log(add(2, add(2, add(2, 3))))

const factorial = num => {
    if (num === 0) {
        return 1
    }
    if (num > 0) {
        return num * factorial(num - 1)
        // 3 * factorial(2)
        // 3 * 2 * factorial(1)
        // 3 * 2 * 1 * factorial(0)
        // 3 * 2 * 1 * 1
    }
}

// console.log("Factorial :", factorial(3))



const flatArray = arr => { // [100, 2, 3, [4, 5, [6, 7, [8, 9, 10]]],[500,4]]
    let flattenedArray = []
    arr.forEach(ele => {
        if (typeof (ele) == "number") {
            flattenedArray.push(ele) // 
            console.log("In if ", flattenedArray)
        } else if (Array.isArray(ele)) {
            //[4, 5, [6, 7, [8, 9, 10]]] 
            // [6, 7, [8, 9, 10]]
            //[8, 9, 10]
            console.log("else", ele)
            flattenedArray = [...flattenedArray, ...flatArray(ele)] //
            console.log("flattenedArray one", flattenedArray)
        }
    })
    console.log("flattenedArray two", flattenedArray)
    return flattenedArray;
}

export const getMaxNum = arr => {

    let maxNum = Number.NEGATIVE_INFINITY
    let flattenedArray = flatArray(arr)
    flattenedArray.forEach(ele => {
        if (ele > maxNum) {
            maxNum = ele;
        }
    })
    return maxNum;

}
console.log("hhh", getMaxNum([100, 2, 3, [4, 5, [6, 7, [8, 9, 10]]], [500, 4]]))