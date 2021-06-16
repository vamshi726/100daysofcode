//Lexical scope : it is the ability for a function scope to access variables from the parent scope

function init(){
    var firstName = "vamshi";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init();

console.log(firstName);

/*
    output: 
    ReferenceError: firstName is not defined
    at Object.<anonymous> 
*/