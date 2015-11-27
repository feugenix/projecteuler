var fib = function(num){
    if (num == 0 || num == 1){
        return num;
    }

    return fib(num - 1) + fib(num - 2);
};

var fibNumber = 0,
    sum = 0, i = 2;

do{
    fibNumber = fib(i++);

    if (fibNumber % 2 == 0){
        sum += fibNumber;
    }
}
while (fibNumber < 4000000);

console.log(sum);