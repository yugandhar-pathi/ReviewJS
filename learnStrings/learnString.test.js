import { findMostRepChar, checkPalindrome, removeLastPath } from './learnString'

test("find most repeated char in the array", () => {
    expect(findMostRepChar("abb")).toEqual(["b"])
    expect(findMostRepChar("abbcc")).toEqual(["b", "c"])
})

test("check given string is palindrome or not", () => {
    expect(checkPalindrome("madam")).toEqual("Given string is palindrome")
    expect(checkPalindrome("apple")).toEqual("Given string is not palindrome")
    expect(checkPalindrome("")).toEqual("Empty string")
})

test("remove last path from the given url", () => {
    expect(removeLastPath("https://attacomsian.com/blog/javascript-iterate-objects")).toEqual("https://attacomsian.com/blog")
})