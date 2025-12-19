const leapYears = function(year) {
    const divisibleBy4 = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;
    return divisibleBy4 && (!isCentury || divisibleBy400);
};

// Do not edit below this line
module.exports = leapYears;
