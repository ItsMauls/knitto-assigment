'use strict'

const testCase1 = 'kasur rusak'
const testCase2 = 'bola'
const testCase3 = 'terbalik'

const isPalindrome = (str : string) : boolean => {
    const inputStr = str
    const reversedStr = str
    .split('')
    .reverse()
    .join('')
    
    return inputStr === reversedStr
}

console.log(isPalindrome(testCase1)) // kasur rusak => true
console.log(isPalindrome(testCase2)) // alob => false
console.log(isPalindrome(testCase3)) // kilabret => false

export {} // untuk memberi tahu typescript kalau file ini bertipe modul