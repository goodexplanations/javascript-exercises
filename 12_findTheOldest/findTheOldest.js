const findTheOldest = function(people) {
    let oldestPerson = null;
    let largestAge = 0;

    for (person of people){
        if(person.yearOfDeath == undefined){
            person.yearOfDeath = new Date().getFullYear();
        }

        let age = person.yearOfDeath - person.yearOfBirth;

        console.log(`We are here with ${person.name} aged ${age}`)

        if (age > largestAge){
            largestAge = age;
            oldestPerson = person;
        }

        console.log(`Oldest person is ${oldestPerson.name}`)
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
