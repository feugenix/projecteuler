var getNumbersInRow = function(num){
    var numbers = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        };

    var tenNumbers = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    var hundreds = Math.floor(num / 100),
        tens = Math.floor((num - hundreds * 100) / 10),
        digits = num - hundreds * 100 - tens * 10,
        strNumber = '';

    if (hundreds > 0){
        strNumber += numbers[hundreds] + 'hundred';
    }

    if (tens > 0){
        if (hundreds > 0){
            strNumber += 'and';
        }

        if (tens == 1){
            strNumber += numbers[tens * 10 + digits];
        }
        else{
            strNumber += tenNumbers[tens];
        }
    }

    if (digits > 0 && tens != 1){
        if (hundreds > 0 && tens == 0){
            strNumber += 'and';
        }

        strNumber += numbers[digits];
    }

    return strNumber;
};

var len = 0;
for (var i = 1; i < 1000; i++){
    len += getNumbersInRow(i).length;
}

len += 'onethousand'.length;

console.log(len);