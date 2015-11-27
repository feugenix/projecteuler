/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16,
the smallest number that can be written as the sum of two abundant numbers is 24.
By mathematical analysis, it can be shown that all integers greater than 28123
can be written as the sum of two abundant numbers.

However, this upper limit cannot be reduced any further by analysis even though it is known
that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

const MAX_INTEGER = 28123;

function getDividersSum(number) {

    var max = Math.ceil(number / 2),
        i, l, sum = 0,
        result = [1];

    for (i = 2; i <= max; i++) {
        number % i === 0 && result.push(i);
    }

    for (i = 0, l = result.length; i < l; i++) {
        sum += result[i];
    }

    return sum;

};

function binarySearch(num, array) {

    var topBorder = array.length,
        bottomBorder = 0,
        index = Math.floor(topBorder / 2),
        numIndex = -1,
        currentNumber, oldIndex = -1;

    while (numIndex === -1) {

        currentNumber = array[index];

        if (currentNumber === num) {
            numIndex = index;
        } else {
            currentNumber < num ? (bottomBorder = index) : (topBorder = index);
            index = bottomBorder + Math.floor((topBorder - bottomBorder) / 2);

            if (oldIndex === index)
                break;
            else
                oldIndex = index;
        }

    }

    return numIndex;
};

var abundants = [],
    i, j, l, sum,
    isSumOfAbundant;

for (i = 2; i <= MAX_INTEGER; i++) {
    sum = getDividersSum(i);
    sum > i && (abundants[abundants.length] = i);
}

sum = 0;
l = abundants.length;

for (i = 1; i <= MAX_INTEGER; i++) {

    for (j = 0; j < l; j++) {
        if (!abundants[j]) continue;

        if (~binarySearch(i - abundants[j], abundants)) {
            isSumOfAbundant = true;
            break;
        }
    }

    if (isSumOfAbundant) {
        isSumOfAbundant = false;
        continue;
    }

    sum += i;
}

console.log(sum);

