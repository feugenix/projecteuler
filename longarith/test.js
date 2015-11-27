// Test cases for long arithmetic module

var arith = require('./longarithmetic');

//var originalNumber = '99999999';
//console.log('Original Number =', originalNumber);
//var origBigNumber = arith.BigNumber(originalNumber);
//console.log('Biggest Number =', bigNumber.biggestNumber, typeof bigNumber.biggestNumber);
//console.log('Long Number in Array =', bigNumber.number);

/*
var numberToAdd = arith.BigNumber(originalNumber);
var result = arith.addition(origBigNumber, numberToAdd);
console.log(result.toString(), originalNumber * 2);

var shortNumber = arith.BigNumber('1234');
console.log(arith.addition(shortNumber, shortNumber).toString(), shortNumber * 2);
*/

/*
var shortNumber = '11111';
var shortBigNumber = arith.BigNumber(shortNumber);
console.log(arith.multiply(origBigNumber, shortBigNumber).toString());
console.log(originalNumber * shortNumber);
*/

var numberForPow = 2;
var bigNumberForPow = arith.BigNumber(numberForPow.toString());
var exp = 1000;
console.log(arith.pow(bigNumberForPow, exp).toString());