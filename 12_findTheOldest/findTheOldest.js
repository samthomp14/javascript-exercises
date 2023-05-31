function getAge(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return (new Date().getFullYear()) - person.yearOfBirth;
    }
}
    

const findTheOldest = function(people) {
    return people.reduce(function(oldestPerson, currPerson) {
        if (!oldestPerson.name) {
            oldestPerson = currPerson;
        } else {
            const oldestAge = getAge(oldestPerson);
            const currAge = getAge(currPerson);
            if (currAge > oldestAge) {
                oldestPerson = currPerson;
            }
        }
        return oldestPerson;
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
