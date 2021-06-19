/*
        The event loop is the secret behind JavaScript’s asynchronous programming.
*/


const uno=()=>{
    console.log("I am One");
};
const dos=()=>{
    setTimeout(()=>{
    console.log("Wooohoo");
    },3000);
    console.log("I am Two");
};

const tres=()=>{
    console.log("I am Three");
};

uno();
dos();
tres();

/*
	output:
    I am One
	I am Two
	I am Three
	//after 3 secs
    Wooohoo


*/