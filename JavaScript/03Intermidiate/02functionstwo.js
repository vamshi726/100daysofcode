//Simple program to get role by Functions
//Create an application with following roles
//admin - gets fullaccess
//subadmin - get acess to create / delete courses
//testprep - get acess to create / delete tests
//user - gets acess to congtent

var getUserRole = function (name , role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //break is not necessary
        case "subadmin":
            return `${name} is sub-admin with acess to create and delete courses`;
            break;
        case"testprep":
            return `${name} is test prep with acess to create and delete tests`;
            break;
        case"user":
            return `${name} is user to consume content`;
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("vamshi","user")); //vamshi is user to consume content
console.log(getUserRole("sammy","testprep")); //sammy is test prep with acess to create and delete tests