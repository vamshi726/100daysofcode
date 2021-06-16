//closure: it gives you access to an outer function's
//          scope from an inner function
function add(x){
    return function(y){
        return x + y;
    };
}
var addresult = add(5);
console.log(add(5));

console.log(add(5)(5)); //prints 10