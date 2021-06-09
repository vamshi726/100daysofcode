//Funtion : its a series of finite steps to acheive specfic task.

function namastey(){
    return "Hello in India";
}

var greetings = namastey();
console.log(greetings); //displays : Hello in India
console.log(namastey()); //another way but displays : Hello in India


function sayHello(name){
    console.log(`Hello there, ${name}, How are you?`); //displays: Hello there, Vamshi, How are you?
}
sayHello("Vamshi");