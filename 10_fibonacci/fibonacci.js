const fibonacci = function(num) {

    num = Number(num);
    if (num ==0){return 0}
    if (num < 0){return "OOPS"}


    // console.log(`${Number("1")}`);

    sequence = [1,1];

    for(i=2; i<num; i++){
        sequence.push(sequence[i-1] + sequence[i-2]);
    }

    return sequence[i-1];



};

fibonacci(1);

// Do not edit below this line
module.exports = fibonacci;
