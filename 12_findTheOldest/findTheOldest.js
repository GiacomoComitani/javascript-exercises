const findTheOldest = function(array) {
    let oldestPerson;
    let maxAge = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      const currentPerson = array[i];
      const currentAge = calculateAge(currentPerson);
  
      if (!currentPerson.hasOwnProperty("yearOfDeath")) {
        if (currentAge > maxAge) {
          maxAge = currentAge;
          oldestPerson = currentPerson;
        }
      } else {
        const ageAtDeath = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
  
        if (ageAtDeath > maxAge) {
          maxAge = ageAtDeath;
          oldestPerson = currentPerson;
        }
      }
    }
  
    return oldestPerson;
  };
  
  function calculateAge(person) {
    const currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  }

// Do not edit below this line
module.exports = findTheOldest;

