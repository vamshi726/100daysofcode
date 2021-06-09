/*Hoisting  : In JavaScript, Hoisting is the default behavior of moving all the
             declarations at the top of the scope before code execution */

tipper("80");

function tipper(a) { 
    var bill = parseInt(a);
    console.log(bill + 5); //display 85
}



var bigTipper = function (a) { 
    var bill = parseInt(a);
    console.log(bill + 5);
}

bigTipper(200); // dispplay 205


console.log(name); //display undefined coz execution context pops up
var name="vamshi";

function sayName() {
    var name = "MR. V";
    console.log(name);//display MR. V
}
sayName();
console.log(name); //display vamshi