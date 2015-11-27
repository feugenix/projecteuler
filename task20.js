/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const MAX_NUMBER = 100;
var arith = require('./longarith/longarithmetic'),
    factorial = arith.factorial(MAX_NUMBER).toString().split(''),
    digitsSum = 0;

factorial.forEach(function(digit) {
    digitsSum += +digit;
});

console.log('digitsSum =', digitsSum);