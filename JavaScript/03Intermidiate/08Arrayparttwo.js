//Arrow functions: it allow us to write shorter function syntax

var isEven = (element) => {
    if (element % 2 === 0) {
      return true;       
    }
    return false;
    return element % 2 === 0;
}

console.log(isEven(3));  //prints false

// var result = [2,3,6,8].every(isEven);
// console.log(result);

var result = [2,4,6,8].every((e)=> e%2 ===0);
console.log(result);  //checks every element and prints true