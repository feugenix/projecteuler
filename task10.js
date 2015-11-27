var sum = 2;
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

for (var i = 3; i < 2000000; i++){
    isSimple(i) && (sum += i);
}

console.log(sum);