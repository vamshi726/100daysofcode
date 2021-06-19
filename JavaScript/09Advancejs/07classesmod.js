//import User from "./06classjs"

const User = require("./06classjs");

const vamshi = new User ("vamshi", "vamshi@gmail.com");

console.log(vamshi.getInfo());
vamshi.enrollCourse("React Course");
vamshi.enrollCourse("Angular Course");

console.log(`Enrolled in :${vamshi.getCourseList()}`);

let courses = vamshi.getCourseList();

courses.forEach((c)=> console.log(c));
