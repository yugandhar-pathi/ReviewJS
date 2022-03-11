import {
    findMax, removeDuplicateNumbers, findCommonElem,
    mostRepNum, greaterThanTwo, addNum, addAll, findMaxAndMin, isSubset, findSecHigNum
} from './learnArrays'

test("find maximum number in array", () => {
    expect(findMax([2, 3, 4])).toBe(4)
    expect(findMax([Number.NEGATIVE_INFINITY])).toBe(Number.NEGATIVE_INFINITY)
    expect(findMax(1)).toBe("Please Pass Array")
})

test("find unique elements from two different arrays", () => {
    expect(removeDuplicateNumbers([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    expect(removeDuplicateNumbers(1)).toBe("Arguments should be arrays")
})

test("find common elements", () => {
    expect(findCommonElem([1, 2, 3], [3, 4])).toEqual([3])
})

test("find most repeated number", () => {
    expect(mostRepNum([1, 2, 2])).toEqual(expect.arrayContaining(["2"]));
    expect(mostRepNum([1, 3, 2, 2, 3, 3, 2])).toEqual(expect.arrayContaining(["3", "2"]))
})

test("find the greater than 2 numbers in an array", () => {
    expect(greaterThanTwo([1, 2, 3], [4, 5, 6, 1, 2])).toEqual([3, 4, 5, 6])
    expect(greaterThanTwo(1, 2, 3)).toBe("input should be arrays")
    expect(greaterThanTwo([], [])).toBe("Arrays should not be empty")
})

test("add 2 to all numbers in the array", () => {
    expect(addNum([1, 2, 3])).toEqual([3, 4, 5])
})

test("Find max and min numbers in the array", () => {
    expect(findMaxAndMin([1, 2, 3, 4, 5, 6])).toEqual({ "max": 6, "min": 1 })
})


test("add all numbers in the array", () => {
    expect(addAll([1, 2, 3, 4])).toEqual(10)
})

test("is subset", () => {
    expect(isSubset([1, 2, 3], [2, 3])).toBe(true);
    expect(isSubset([1, 2, 3], [4, 5, 6])).toBe(false);
})

test("Find second highest number in the array", () => {
    expect(findSecHigNum([1, 2, -100, 100, 0, 90])).toEqual(90)
    expect(findSecHigNum([-1, -2, -100])).toEqual(-2)
})