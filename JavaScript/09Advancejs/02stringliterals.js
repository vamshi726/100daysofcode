/*
Template Literals:  In ES6 provides new features to create
                    a string that gives more control over dynamic strings.
*/

var name = `Vamshi`;
var fullName = `${name} Muluguri`;

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("Vamshi"));
console.log(fullName.toUpperCase(fullName));

/*
    output:
    Vamshi Muluguri
    V
    false
    true
    VAMSHI MULUGURI

*/