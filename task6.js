var squareSum = 0, sumOfSquares = 0;

for (var i = 1; i < 101; i++){
    squareSum += i;
    sumOfSquares += i*i;
}

squareSum *= squareSum;

console.log(squareSum - sumOfSquares);