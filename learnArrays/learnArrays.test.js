import { findMax, findCommonEle, findCommonElem } from './learnArrays'

test("find maximum number in array", () => {
    expect(findMax([2, 3, 4])).toBe(4)
    expect(findMax([Number.NEGATIVE_INFINITY])).toBe(Number.NEGATIVE_INFINITY)
    expect(findMax(1)).toBe("Please Pass Array")
})

test("find unique elements from two different arrays", () => {
    expect(findCommonEle([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    expect(findCommonEle(1)).toBe("Arguments should be arrays")
})

test("find common elements", () => {
    expect(findCommonElem([1, 2, 3], [3, 4])).toEqual([3])
})