var isLeapYear = function(year){
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
};

var getOffset = function(days){
    return days - 28;
};

var getNewWeekDay = function(oldWeekDay, offset){
    return (oldWeekDay + offset) % 7;
};

var monthesNoLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    monthesLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var globalOffset = 0;
for (var i = 0; i < monthesNoLeap.length; i++){
    globalOffset += getOffset(monthesNoLeap[i]);
}

console.log('no leap offset = ', globalOffset);

globalOffset = 0;

for (var i = 0; i < monthesLeap.length; i++){
    globalOffset += getOffset(monthesLeap[i]);
}

console.log('leap offset = ', globalOffset);

var leapOffsets = [], notLeapOfffsets = [];

for (var i = 0; i < monthesNoLeap.length; i++){
    leapOffsets[i] = getOffset(monthesLeap[i]);
    notLeapOfffsets[i] = getOffset(monthesNoLeap[i]);
}

var startOffset = 0;

for (var i = 0; i < notLeapOfffsets.length; i++){
    startOffset += notLeapOfffsets[i];
}

startOffset %= 7;

for (var i = 1900; i <= 2001; i++){
    
}