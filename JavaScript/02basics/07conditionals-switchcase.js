//Create an application with following roles
//admin - gets fillacess
//subadmin - get acess to create / delete courses
//testprep - get acess to create / delete tests
//user - gets acess to congtent

var user = "testprep";

switch (user){

    case "admin":
        console.log("Full acess");
        break;
    case "subadmin":
        console.log("get acess to create / delete courses");
        break;
    case "testprep":
        console.log("get acess to create / delete tests");
        break;
    case "user":
        console.log("gets acess to congtent");
        
    default:
        console.log("trial user");

}