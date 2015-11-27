var number = 600851475143,
    sqrtNumber = Math.ceil(Math.sqrt(number));

var isSimple = function(num){
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

for (var i = sqrtNumber; i > 1; i--){
    if (number % i == 0 && isSimple(i)){
        console.log(i);
        break;
    }
}