/*
    Promises in JavaScript represent processes that are already happening, 
    which can be chained with callback functions.

    A promise is an object that may produce a single value some time in the future : 
    either a resolved value, or a reason that it's not resolved
*/


const uno=()=>{
    return "I am One";
};
// const dos= async()=>{
//     setTimeout(()=>{
//     return "I am Two"
//     },3000);

// };

const dos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    });
};

const tres=()=>{
    return "I am Three";
};

const callMe= async ()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();


/*
	output:
    I am One
    I am two
    I am Three
*/