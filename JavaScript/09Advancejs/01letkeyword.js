/*let keyword : it allows you to declare variables that are limited to the
                scope of a block statement, or expression on which it is used, 
                unlike the var keyword, which declares a variable globally, or 
                locally to an entire function regardless of block scope
*/

//console.log(name); prints Vamshi
var name = "Vamshi";

if(true){
    let lastName = "Muluguri";
}
console.log(lastName);

/**
    output:
    
    ReferenceError: lastName is not defined
    at Object.<anonymous>

 */