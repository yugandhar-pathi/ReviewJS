import { sortArrays } from './sortArray'

test("sort the array", () => {
    expect(sortArrays([1, 5, 2], "asc")).toEqual([1, 2, 5])
    expect(sortArrays([1, 5, 2], "dsc")).toEqual([5, 2, 1])
})