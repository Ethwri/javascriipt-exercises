const reverseString = function(input) {
    inputReversed = '';
    for(i = 1; i < input.length +1; i ++){
        inputReversed += input[input.length - i];
    }
    return inputReversed;
}

module.exports = reverseString
