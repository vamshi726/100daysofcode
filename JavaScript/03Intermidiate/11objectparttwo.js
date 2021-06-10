//Javascript methods : JavaScript methods are actions that can be performed on objects

var user = {
    firstName: "Vamshi",
    lastName: "Muluguri",
    role: "Admin",
    loginCount: 34,
    facebookSignedIn :true,
    courseList: [],
    buyCourse: function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function (){
        return user;
    }
};

var courseList=true;
console.log("Username :",user.firstName);
console.log(user.getCourseCount());
user.buyCourse("Angular Course");
user.buyCourse("React JS");
console.log(user.getCourseCount());
console.log("user enrolled in :",user.courseList);
console.table(user.info());

/*
Username : Vamshi
Vamshi is enrolled in total of 0 courses
Vamshi is enrolled in total of 2 courses
user enrolled in : [ 'Angular Course', 'React JS' ]
┌──────────────────┬──────────────────┬────────────┬────────────┐
│     (index)      │        0         │     1      │   Values   │
├──────────────────┼──────────────────┼────────────┼────────────┤
│    firstName     │                  │            │  'Vamshi'  │
│     lastName     │                  │            │ 'Muluguri' │
│       role       │                  │            │  'Admin'   │
│    loginCount    │                  │            │     34     │
│ facebookSignedIn │                  │            │    true    │
│    courseList    │ 'Angular Course' │ 'React JS' │            │
│    buyCourse     │                  │            │            │
│  getCourseCount  │                  │            │            │
│       info       │                  │            │            │
└──────────────────┴──────────────────┴────────────┴────────────┘
*/