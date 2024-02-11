const reverseString = function(string) {
    let charsArray = string.split("");
    charsArray.reverse();
    return charsArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
