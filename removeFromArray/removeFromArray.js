const removeFromArray = function() {
    var newArray = arguments[0];
    for (i = 1; i < arguments.length; i ++) {
            if(newArray.indexOf(arguments[i]) >= 0) {
                var pos = newArray.indexOf(arguments[i]);
                newArray.splice(pos, 1);
            }
        
    }
    return newArray;

}

module.exports = removeFromArray
