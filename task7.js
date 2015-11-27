var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
    endValue = 10 * 1000 * 1000 * 1000,
    primeNumbersCount = primeNumbers.length + 1;

var isPrime = function(num){
    var endValue = Math.ceil(Math.sqrt(num));
    if (num % 2 == 0){
        return false;
    }

    for (var i = 3; i <= endValue; i += 2){
        if (num % i == 0){
            return false;
        }
    }

    return true;
};

for (var i = 31; i < endValue; i += 2){
    if (isPrime(i)){
        if (primeNumbersCount < 10001){
            primeNumbersCount++;
        }
        else{
            console.log(i);
            break;
        }
    }
}

