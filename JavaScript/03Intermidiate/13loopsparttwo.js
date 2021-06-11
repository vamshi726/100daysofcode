//forEach() calls a provided callbackFn function once for each element in an array in ascending index order

const myStates = [
    "Telangana",
    "Delhi",
    "Assam",
    1947,
    "Tamilnadu",
    "Maharastra"
];

myStates.forEach((s) => {            //A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
    console.log(s);}
    )
    
/* o/p:
    Telangana
    Assam
    1947
    Tamilnadu
    Maharastra
    Delhi
*/

