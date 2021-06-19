/*
    (...) the spread operator allows you to expand an array into its individual elements,
    the rest parameter lets you bundle elements back into an array.
*/

function sumOne(a,b){
    return a+b;
}

var myA = [5, 6];
console.log(sumOne(...myA)); //spread OPerator

function sumTwo (a , b , ...args){
    console.log(args);
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum+= arg;
        
    }
    return [sum , multi];

}

console.log(sumTwo(2,6,7,9,7));

/*
    output:
    11
    [ 7, 9, 7 ]
    [ 23, 12 ]
*/  