/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

const MAX_NUMBER = 10000;

function getDividersSum(number) {

    var max = Math.ceil(number / 2),
        i,
        result = [1];

    for (i = 2; i <= max; i++) {
        number % i === 0 && result.push(i);
    }

    return result.reduce(function(prev, current) { return prev + current });

};

var calculatedHash = {},
    currentSum,
    amicableNumbers = [];

for (var i = 2; i < MAX_NUMBER; i++) {

    if (calculatedHash[i]) {
        continue;
    }

    currentSum = calculatedHash[i] = getDividersSum(i);

    if (i === currentSum) continue;

    if (!calculatedHash[currentSum]) {
        calculatedHash[currentSum] = getDividersSum(currentSum);
    }

    i === calculatedHash[currentSum] && amicableNumbers.push(i, currentSum);

}

console.log(amicableNumbers.reduce(function(prev, current) { return prev + current }));

