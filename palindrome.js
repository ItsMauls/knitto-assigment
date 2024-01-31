'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var testCase1 = 'kasur rusak';
var testCase2 = 'bola';
var testCase3 = 'terbalik';
var isPalindrome = function (str) {
    var inputStr = str;
    var reversedStr = str
        .split('')
        .reverse()
        .join('');
    return inputStr === reversedStr;
};
console.log(isPalindrome(testCase1)); // kasur rusak => true
console.log(isPalindrome(testCase2)); // alob => false
console.log(isPalindrome(testCase3)); // kilabret => false
