var endNumber = 1 * 1000 * 1000;

var getTriangleNumber = function(num){
    return (1 + num)/2 * num;
};

var getDivisorsNumber = function(num){
    var sqrtValue = Math.sqrt(num),
        endValue = Math.ceil(sqrtValue),
        count = 2; // num is the own divisor and number 1 is divisor for all natural numbers

    if ((sqrtValue + '').indexOf('.') == -1){
        count--;
    }

    for (var i = 2; i <= endValue; i++){
        (num % i == 0) && (count += 2);
    }

    return count;
};

var step = 1 * 1000 * 1000, // very big step in the beginning
    stepDecrement = 1000,
    startValue = 1000;

//var startDivisionsCount = getDivisorsNumber(getTriangleNumber(startValue));

/*
for (var i = startValue + step; i < endNumber; i += step){
    var newDivisionsCount = getDivisorsNumber(getTriangleNumber(i));
    if (newDivisionsCount > startDivisionsCount){
        step -= stepDecrement;
    }
}
*/

var startTime = (new Date()).getTime();

for (var i = 1; i < endNumber + 1; i += 1){
    var triangleNumber = getTriangleNumber(i);
    var divisionsCount = getDivisorsNumber(triangleNumber);
    if (divisionsCount > 500){
        console.log(i, triangleNumber, divisionsCount);
        break;
    }
}

console.log('done. time = ', (new Date()).getTime() - startTime);