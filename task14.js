var getSequenceLength = function(num){
    var getSequence = function(num, length){
        if (num == 1){
            return length;
        }

        var newNumber;
        if (num % 2 == 0){
            newNumber = num / 2;
        }
        else{
            newNumber = 3 * num + 1;
        }

        return getSequence(newNumber, ++length);
    }

    var seqLength = 1;
    return getSequence(num, seqLength);
};

var max = {l: 0, n: 0};
for (var i = 2; i <= 1000000; i++){
    var seqLen = getSequenceLength(i);
    if (seqLen > max.l){
        max.l = seqLen;
        max.n = i;
    }
}

console.log(max.n, max.l);