var work = true;
for (var a = 1; a < 1000 && work; a++){
    for (var b = a + 1; (b < 1000 - a) && work; b++){
        for (c = b + 1; (c < 1000 - b)  && work; c++){
           if ((a + b + c == 1000) && (a*a + b*b == c*c)){
               console.log(a, b, c, a*b*c);
               work = false;
            }
        }
    }
}