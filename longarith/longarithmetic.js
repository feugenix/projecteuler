// My bicycle for long arithmetic
var DEBUG = 0;

var BigNumber = function(number, digitsCount){
    if (!(this instanceof BigNumber)){
        return new BigNumber(number, digitsCount);
    }

    digitsCount || (digitsCount = 5);
    this.number = [];
    this.digitsCount = digitsCount;

    this.biggestNumber = [];

    for (var i = 0; i < digitsCount; i++){
        this.biggestNumber.push('9');
    }

    this.biggestNumber = this.biggestNumber.join('') - 0;

    if (Array.isArray(number)){
        this.number = number;
    }
    else{

        for (var i = number.length - digitsCount; i > -1; i -= digitsCount){
            this.number.push(number.substr(i, digitsCount));
        }

        var rest = number.length % digitsCount;
        if (rest != 0){
            this.number.push(number.substr(0, rest));
        }

        this.number = this.number.reverse();
    }
};

BigNumber.prototype.toString = function(){
    return this.number.join('');
};

BigNumber.prototype.valueof = function(){
    return this.toString();
};

exports.BigNumber = BigNumber;

exports.addition = function(number1, number2){
    if (!(number1 instanceof BigNumber && number2 instanceof BigNumber)){
        throw "Instances of BigNumber expected!";
    }

    var longestNumber = number1.number.length > number2.number.length
        ? number1.number : number2.number;

    DEBUG && console.log('longestNumber =', longestNumber);

    var iterations = longestNumber == number1.number
                        ? number2.number.length : number1.number.length,
        overflow = 0,
        result = [];

    DEBUG && console.log('iterations =', iterations);

    var biggestNumber = number1.biggestNumber;

    number1 = number1.number;
    number2 = number2.number;

    for (var i = 0; i < iterations; i++){
        result[i] = parseInt(number1[number1.length - i - 1], 10)
            + parseInt(number2[number2.length - i - 1], 10) + overflow;

        if (result[i] > biggestNumber){
            overflow = 1;
            result[i] -= biggestNumber + 1;
        }
        else{
            overflow = 0;
        }
    }

    DEBUG && console.log('overflow =', overflow);
    if (overflow){
        var nextDigit = longestNumber[longestNumber.length - iterations - 1];
        DEBUG && console.log('nextDigit = ', nextDigit);
        var increment = 1;
        if (nextDigit){
            var flag = true;
            do{
                if (++nextDigit > biggestNumber){
                    result.push(nextDigit - biggestNumber + 1);
                    nextDigit = longestNumber[++increment];
                    nextDigit || (nextDigit = 0);
                    flag = true;
                }
                else{
                    result.push(nextDigit);
                    flag = false;
                }

            }while(flag);
        }
        else{
            result.push(1);
        }
    }

    return BigNumber(result.reverse());
};

exports.multiply = function(number1, number2){
    if (!(number1 instanceof BigNumber && number2 instanceof BigNumber)){
        throw "Instances of BigNumber expected!";
    }

    var intermediateResults = [],
        primeMultiplier = number1.number,
        secondMultiplier = number2.number,
        zeros = 0,
        overflow = 0,
        biggestNumber = number1.biggestNumber;

    (primeMultiplier.length < secondMultiplier.length)
        && (secondMultiplier = primeMultiplier, primeMultiplier = number2.number);

    for (var i = secondMultiplier.length - 1; i > -1 ; i--){
        overflow = 0;
        var result = [];
        for (var j = primeMultiplier.length - 1; j > -1 ; j--){
            var tmp = primeMultiplier[j]
                * secondMultiplier[i] + overflow;

            DEBUG && console.log('multipliers', primeMultiplier[j], secondMultiplier[i], tmp, biggestNumber);
            if (tmp > biggestNumber){
                overflow = Math.floor(tmp / (biggestNumber + 1));
                tmp -= overflow * (biggestNumber + 1);
            }
            else{
                overflow = 0;
            }
            DEBUG && console.log('overflow', overflow, tmp);

            result.push(tmp);
        }

        overflow && result.push(overflow);

        DEBUG && console.log('result before', result);

        var biggestNumberString = biggestNumber.toString(),
            biggestNumberWithoutDigit = biggestNumberString.substr(0, biggestNumberString.length - 1);

        biggestNumberWithoutDigit = (biggestNumberWithoutDigit - 0) + 1;
        result.forEach(function(value, index){
            DEBUG && console.log('foreach', value, index, biggestNumberWithoutDigit);
            if ((index != result.length - 1) && value < biggestNumberWithoutDigit){

                var zerosCount = biggestNumberString.length - value.toString().length,
                    newValue = '';

                for (var k = 0; k < zerosCount; k++){
                    newValue += '0';
                }
                newValue += value;

                result[index] = newValue;
            }
        });
        DEBUG && console.log('result after', result);

        result.reverse().push((Math.pow(10, zeros++) + '').replace('1', ''));
        result = result.join('') + '';
        DEBUG && console.log('result big number', result, ', type =', typeof result);
        intermediateResults.push(BigNumber(result));
    }

    DEBUG && console.log('intermediateResults', intermediateResults);
    var returnedValue = intermediateResults[0];
    for (var i = 1; i < intermediateResults.length; i++){
        returnedValue = exports.addition(returnedValue, intermediateResults[i]);
    }

    return returnedValue;
};

exports.pow = function(number, exp){
    if (!(number instanceof BigNumber)){
        throw "First argument must be instance of BigNumber!";
    }

    if (!(exp instanceof BigNumber) && isNaN(parseInt(exp, 10))){
        throw "Exponent must be valid number or BigNumber!";
    }

    var result = BigNumber([1]);

    if (exp instanceof BigNumber){
        exp = exp.toString();
        var startValue = 0;

        while(startValue.toString() <= exp){
            result = exports.multiply(result, number);
            startValue++;
        }
    }
    else{
        for (var i = 1; i <= exp; i++){
            DEBUG && console.log('\n');
            DEBUG && console.log('iteration =', i, 'result =',result.toString());
            result = exports.multiply(result, number);
        }
    }

    return result;
};

exports.factorial = function(number) {

    var result = BigNumber([1]);

    for (var i = 1; i <= number; i++) {
        result = exports.multiply(result, BigNumber([i]));
    }

    return result;

};