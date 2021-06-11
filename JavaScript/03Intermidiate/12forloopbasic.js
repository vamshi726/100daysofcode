//Loops : they repeat an action some number of times.

const myStates = [
    "Telangana",
    "Delhi",
    "Assam",
    1947,
    "Tamilnadu",
    "Maharastra"
];

for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}
    /*
    Telangana
    Delhi
    Assam
    Tamilnadu
    Maharastra
    */

let i = 0;

while(i < myStates.length){
    console.log(myStates[i]);
    i++;
}

    /*o/p :
    Telangana
    Delhi
    Assam
    1947
    Tamilnadu
    Maharastra*/

do{
    console.log(i); //prints 1 to 10 nums
    i++;

}while(i <10)