var startValue = 2520,
    endValue = 9 * 1000 * 1000 * 1000,
    work = true;

var isDivisible = function(num){

    for (var i = 2; i < 21; i++){
        if (num % i != 0){
            return false;
        }
    }

    return true;
};

for (var i = startValue + 10; i < endValue; i += 10){
    if (isDivisible(i)){
        console.log(i);
        break;
    }
}