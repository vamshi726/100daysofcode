//scope : Scope determines the accessibility of the variables
//scopechain: if any function doesn't contain local scope its access the global scope
var name = "vamshi";   //Global scope variable
console.log("Line number 1", name);

function sayName(){
    //var name="MY V"; 
    console.log("Line number 2",name);//here the scope get from globel name vasmhi
    sayNameTwo();
    function sayNameTwo(){
    var name = "My VM"; //local scope variable
        console.log("Line number 3",name);
    }
}
sayName();

/* O/P :
Line number 1 vamshi
Line number 2 vamshi
Line number 3 My VM
*/