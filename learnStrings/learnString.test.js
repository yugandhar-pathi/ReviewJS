import { findMostRepChar, isPalindrome, removeLastPath } from './learnString'

test("find most repeated char in the array", () => {
    expect(findMostRepChar("abb")).toEqual(expect.arrayContaining(["b"]))
    expect(findMostRepChar("abbcc")).toEqual(expect.arrayContaining(["b", "c"]))
})

test("check given string is palindrome or not", () => {
    expect(isPalindrome("madam")).toEqual("Given string is palindrome")
    expect(isPalindrome("apple")).toEqual("Given string is not palindrome")
    expect(isPalindrome("")).toEqual("Empty string")
})

test("remove last path from the given url", () => {
    expect(removeLastPath("https://attacomsian.com/blog/javascript-iterate-objects")).toEqual("https://attacomsian.com/blog")
})