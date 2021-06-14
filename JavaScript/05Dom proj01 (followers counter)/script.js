
//Followers Counter Project

var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

let count =1;

setInterval(() => {
  if(count <1000){
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers on Linkedin!";
}, 4560);