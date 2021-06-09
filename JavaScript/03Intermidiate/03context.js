/*Global constext :is the default execution context in
                  which JS code start its execution when the file first loads.
*/

sayHello();
function sayHello(){
    console.log("Hello");
}

if(2 === 2){
    console.log("This is true statement");
}

var myName ="vamshi";
if(myName === window.myName){
    console.log("This is also True statement");
} 