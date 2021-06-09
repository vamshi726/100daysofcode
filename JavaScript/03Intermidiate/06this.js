//This : The JavaScript this keyword refers to the object it belongs to.

console.log(this); //node engine displays {}

function sayName(){
    var name= "vamshi";
    console.log(this); //browser js engine displays window objesct
}
sayName();