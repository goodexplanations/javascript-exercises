const sumAll = function(a, b) {

    if (a < 0 || b < 0){
        return "ERROR";
    }

    if (!Number.isInteger(a) || !Number.isInteger(b) ){
        return "ERROR";
    }



    if (a > b){
        let hold = a;
        a = b;
        b = hold;
    }

    for (i=a+1 ; i<=b; i++){
         a += i
    }

    return a;
};

// Do not edit below this line
module.exports = sumAll;

// console.log(`${sumAll(10, [90, 1])}`);
