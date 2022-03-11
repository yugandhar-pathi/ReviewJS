import { sortArrays, findMax, findLongWord } from './sortArray'

const testArr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let text = "Create a function to return the longest word(s) in a sentence.";

test("sort the array", () => {
    expect(sortArrays([1, 5, 2], "asc")).toEqual([1, 2, 5])
    expect(sortArrays([1, 5, 2], "dsc")).toEqual([5, 2, 1])
})

test("Find max number in the nested array", () => {
    expect(findMax(testArr)).toEqual(100)
})

test("find biggest word in the sentense", () => {
    expect(findLongWord(text)).toEqual("sentence.")
})