var arith = require('./longarith/longarithmetic');

var number = arith.BigNumber([2]),
    exp = 1000;

var bigResult = arith.pow(number, exp).toString(),
    result = 0;

Array.prototype.forEach.call(bigResult, function(value){
    result += (value - 0);
});

console.log('result =', result);