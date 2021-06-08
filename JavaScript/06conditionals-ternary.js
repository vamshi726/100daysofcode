//Show user a signoutbutton if he is authentiacated
//else show login/Signup Button

var authenticated = true;

// if (authenticated){
//     console.log("Show signout button");
// } else{
//     console.log("Show login option");
// }

authenticated ? console.log("signout button") : console.log("login")