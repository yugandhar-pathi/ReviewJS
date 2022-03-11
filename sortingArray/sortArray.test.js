import { sortArrays } from './sortArray'

test("sort the array", () => {
    expect(sortArrays([1, 5, 2])).toEqual([5, 2, 1])
})