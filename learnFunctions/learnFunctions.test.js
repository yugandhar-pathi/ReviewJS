import { add } from './learnFunctions'

test("add function for integers", () => {
    expect(add(2, 3)).toBe(5)
})

test("add function for int and string", () => {
    expect(add(1, "hi")).toBe(NaN)
})