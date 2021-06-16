//The bind() method allows an object to borrow a method 
//   from another object without making a copy of that method.
//   This is known as function borrowing in JavaScript



const vamshi = {
  firstName: "Vamshi",
  lastName: "Muluguri",
  role: "Admin",
  courseCount: 6,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// vamshi.getInfo();
// dj.getInfo();

// var djInfo = vamshi.getInfo.bind(dj);
// djInfo();

// vamshi.getInfo.call(dj);  //same as below

vamshi.getInfo.bind(dj)();
/**
   output:
      First name is Rock
      Last name is DJ
      His role is Sub-Admin
      and he is studying 4 courses
        
 */
