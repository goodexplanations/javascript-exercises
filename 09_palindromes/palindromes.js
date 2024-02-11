const palindromes = function (str) {

    plainStr = removeNonLetters(str).toLowerCase();
    reverseStr = reverseString(plainStr).toLowerCase();

    //console.log(`plain is ${plainStr} and reverse is ${reverseStr}`);

    return plainStr == reverseStr;   
};


const reverseString = function(string) {
    let charsArray = string.split("");
    charsArray.reverse();
    return charsArray.join("");
};

function removeNonLetters(str) {
    return str.replace(/[^A-Za-z0-9]/g, '');
}


// Do not edit below this line
module.exports = palindromes;
