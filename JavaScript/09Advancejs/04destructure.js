/*
        destructuring assignment : syntax is a JavaScript expression that
         makes it possible to unpack values from arrays, or properties
        from  objects, into distinct variables

        Destructuring is a JavaScript expression that allows us to extract data from arrays,
         objects, and maps and set them into new, distinct variable
 */


const user = [ "Vamshi" , 6 , "admin"];

// var role = user[2];
// var name = user[0];
// console.log(role); //prints admin

const MyUser = {
    name:"Vamshi",
    courseCount: 8,
    role: "admin"
}

console.log(MyUser.courseCount);

const { name , myCourseCount , role} = MyUser;
console.log(role);

/*
    output:
    8
    admin
*/