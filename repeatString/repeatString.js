const repeatString = function(string, times) {
    var word = '';
    if (times < 0) {
        return 'ERROR';
    }
    for (i = 0; i < times; i ++) {
        word += string;
    }
    return word;
}

module.exports = repeatString
