'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var testCase1 = 10;
var testCase2 = 3;
var testCase3 = 5;
var fizzBuzz = function (maxNum) {
    var output = [];
    for (var i = 1; i <= maxNum; i++) {
        var num = i;
        if (num % 3 === 0 && num % 5 === 0)
            output.push('FizzBuzz');
        else if (num % 3 === 0)
            output.push('Fizz');
        else if (num % 5 === 0)
            output.push('Buzz');
        else
            output.push(num);
    }
    return output;
};
console.log(fizzBuzz(testCase1)); // [1,2,'Fizz',4,'Buzz','Fizz',7, 8,'Fizz','Buzz']
console.log(fizzBuzz(testCase2)); // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz(testCase3)); // [ 1, 2, 'Fizz', 4, 'Buzz' ]
