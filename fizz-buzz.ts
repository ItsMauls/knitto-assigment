'use strict'

const testCase1 = 10
const testCase2 = 3
const testCase3 = 5

const fizzBuzz = (maxNum : number) : (string | number)[] => {
    const output : (string | number)[] = []

    for(let i = 1 ; i <= maxNum ; i++) {
        const num = i
     
        if(num % 3 === 0 && num % 5 === 0 ) output.push('FizzBuzz')
        else if(num % 3 === 0) output.push('Fizz')
        else if(num % 5 === 0) output.push('Buzz')
        else output.push(num)
    }

    return output
}

console.log(fizzBuzz(testCase1)) // [ 1,2,'Fizz',4,'Buzz','Fizz',7, 8,'Fizz','Buzz' ]
console.log(fizzBuzz(testCase2)) // [ 1, 2, 'Fizz' ]
console.log(fizzBuzz(testCase3)) // [ 1, 2, 'Fizz', 4, 'Buzz' ]

export {} // untuk memberi tahu typescript kalau file ini bertipe modul