// most repeated character in a string
export const findMostRepChar = str => {
    let testObj = {}
    let mostRepChar;
    let mostRepCharCount = Number.NEGATIVE_INFINITY;
    for (let char in str) {
        testObj[str[char]] ? testObj[str[char]] += 1 : testObj[str[char]] = 1
    }
    for (let char in testObj) {
        if (testObj[char] > mostRepCharCount) {
            mostRepCharCount = testObj[char];
            mostRepChar = [char]
        } else if (testObj[char] = mostRepCharCount) {
            mostRepChar.push(char)
        }
    }
    return mostRepChar;
}
// check weather a string is palindrome or not

export const isPalindrome = str => {
    const revStr = str.split("").reverse().join("")
    if (str.length == 0) {
        return "Empty string"
    }
    if (str == revStr) {
        return true
    } else {
        return false
    }
}

// remove last path from a given url


export const removeLastPath = str => str.slice(0, str.lastIndexOf("/")) 
