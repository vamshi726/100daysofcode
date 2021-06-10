//fill & filter functions: this functions used to filling specfic values filter is used to remove values
//array.fill(value, start, end)

var testArray = [2, 4, 6, 3, 1, 5, 8, 9];

console.log(testArray.fill("v",2,5));  //(what to fill , start index , end index)

const myNumber = [23, 24, 25, 55, 66, 77, 88 ,98];

const result = myNumber.filter((num)=> num > 55);

console.log(result,"\n");

//slice and splice functions in js

var user = ["Ted","Tim","Sam","Sar","Sod","Ton"];
console.log(user.slice(1,4));   //slice is used to remove from start to index end index

user.splice(1,4,"HI","Hello");   //splice used to remove specfied position and fill it with given array
console.log(user); 