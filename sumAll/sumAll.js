const sumAll = function(numOne, numTwo) {
    var total = 0;
    var runningTotal = 0;
    var endNum = 0;
    if (numOne <  0 || numTwo < typeof 0 || isNaN(numOne) || isNaN(numTwo)) {
        return 'ERROR';
    }else if (numOne < numTwo) {
        runningTotal = numOne;  
        endNum = numTwo
    } else {
        runningTotal = numTwo;
        endNum = numOne; 
    }
    
    for (i = 0; i < endNum; i ++) {
        total = total + runningTotal;
        runningTotal++;
    
    }
    return total;
}

module.exports = sumAll
