import { findMax, removeDuplicateNumbers, findCommonElem, mostRepNum, greaterThanTwo } from './learnArrays'

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
    expect(mostRepNum([1, 2, 2])).toEqual(["2"]);
    expect(mostRepNum([1, 3, 2, 2, 3, 3, 2])).toEqual(["2", "3"])
})

test("find the greater than 3 numbers in an array", () => {
    expect(greaterThanTwo([1, 2, 3], [4, 5, 6, 1, 2])).toEqual([4, 5, 6])
    expect(greaterThanTwo(1, 2, 3)).toBe("input should be arrays")
    expect(greaterThanTwo([], [])).toBe("Arrays should not be empty")
})