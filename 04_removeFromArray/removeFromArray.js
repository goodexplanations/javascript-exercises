const removeFromArray = function(array) {

    console.log(`Received ${array}`);

    for (i=1; i < arguments.length; i++){
        

        do{

        //Get the index of the element we are looking to remove
        let index = array.indexOf(arguments[i]);
        
        console.log(`${index}`);

        if (index !== -1){
            array.splice(index, 1);
        }
        // console.log(`To remove ${arguments[i]}`);
        // console.log(`${typeof(arguments[i])}`);
    
    }while(array.indexOf(arguments[i]) !== -1);
    
    
    }

    // console.log(`Left with ${array}`);

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;


removeFromArray([1, 2, 3, 4], 3,4);