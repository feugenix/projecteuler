var polyndrom, work = true;

for (var i = 999; i > 800 && work; i--){
    for (var j = 999; j > 800 && work; j--){
        var product = (i * j) + '';
        if (product == product.split('').reverse().join('')){
            console.log(product);
            work = false;
        }
    }
}