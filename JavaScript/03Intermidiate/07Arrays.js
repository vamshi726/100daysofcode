//Array: JavaScript arrays are used to store multiple values in a single variable.

var countries = [
                    "India",
                    "Japan",
                    "USA",
                    "Russia"
                ];

var states = new Array("Telangana","Tamilnadu","Kerala","Delhi")

//console.log(states[1]);

console.log("Array lenght is: ",states.length);         //lenght of array is 4

states[0]="Punjab";       //access elements in array
//console.log(states);

var user = ["vamshi","vamshi@vm.dev",3,34,true];
console.log(user);
user.pop();         //deleting last element
user.push("false");
console.log(user);
// user.pop();
// console.log(user);
user.unshift("NEW VALUE");      //adding first element
// console.log(user);
//user.shift();                   //deleting first element
console.log(user);

console.log("Index of vamshi is:",user.indexOf("vamshi"));

console.log(Array.from("vamshi"));

/*output:

    [ 'vamshi', 'vamshi@vm.dev', 3, 34, true ]
    [ 'vamshi', 'vamshi@vm.dev', 3, 34, 'false' ]   
    [ 'vamshi', 'vamshi@vm.dev', 3, 34, 'false' ]   
    Index of vamshi is: 0
    [ 'v', 'a', 'm', 's', 'h', 'i' ]
    Array lenght is:  4

*/