/*
Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/

function getStringValue(str) {

    var value = 0;

    for (var i = 0; i < str.length; i++) {
        value += str.charCodeAt(i) - 96;
    }

    return value;

};

var fs = require('fs');

fs.readFile('./names.txt', function(err, content) {
    if (err)
        throw err;

    var namesArray, value = 0;

    content = content.toString().toLowerCase().replace(/"/g, '');

    namesArray = content.split(',');
    namesArray.sort();

    namesArray.forEach(function(name, index) {
        var tmpValue = 0;
        for (var i = 0, l = name.length; i < l; i++) {
            tmpValue += name.charCodeAt(i) - 96;
        }

        value += tmpValue * (index + 1);
    });

    console.log(value);
    
});