//login verification for course 

var email = true;
var facebook = false;
var google = true;

if(email || facebook || google){
    console.log("Login Success");
}
else {
    console.log("Login failed");
}