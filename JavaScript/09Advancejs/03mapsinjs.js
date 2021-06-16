/*
The Map object holds key-value pairs and remembers the 
original insertion order of the keys
*/

var myMap = new Map();

myMap.set(1,"vamshi");
myMap.set(2,"Hello");
myMap.set(3,"Welcome");
myMap.set(4,"to");
myMap.set(5,"Javascript");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value id ${value}`);
}

for(let [key , value] of myMap){
    console.log(`Key is :${key} and Value is ${value}`);
}

myMap.forEach((v,k) => console.log(`${v} and key is : ${k}`) )

myMap.delete(2);

console.log(myMap);

/*
    output:
    Map(5) {
  1 => 'vamshi',
  2 => 'Hello',
  3 => 'Welcome',
  4 => 'to',
  5 => 'Javascript'
}

Key is 1
Key is 2
Key is 3
Key is 4
Key is 5

Value id vamshi
Value id Hello
Value id Welcome
Value id to
Value id Javascript

Key is :1 and Value is vamshi
Key is :2 and Value is Hello
Key is :3 and Value is Welcome
Key is :4 and Value is to
Key is :5 and Value is Javascript

vamshi and key is : 1
Hello and key is : 2
Welcome and key is : 3
to and key is : 4
Javascript and key is : 5

Map(4) { 1 => 'vamshi', 3 => 'Welcome', 4 => 'to', 5 => 'Javascript' }

*/