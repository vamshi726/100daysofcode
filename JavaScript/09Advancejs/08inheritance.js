/*
    Inheritance is an important concept in object oriented programming.
    In the classical inheritance, methods from base class get copied into derived class.

    static: The static keyword defines static methods for classes.


    The super keyword refers to the parent class.
    It is used to call the constructor of the parent class and to access the parent's properties and methods.
*/


class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    courseList = [];
  
    getInfo() {
      return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
      this.courseList.push(name);
    }
    getCourseList() {
      return this.courseList;
    }
  
   /*static*/ login() {
      return "You are logged in";
    }
  }
  
  class SubAdmin extends User {
    constructor(name, email) {
      super(name, email);
    }
    getAdminInfo() {
      return "I am subadmin";
    }
    login() {
      return "login for admin only";
    }
  }
  
  const tom = new SubAdmin("tom","tom@jerry.com");
  console.log(tom.getAdminInfo());
  console.log(tom.login());

  console.log(tom.getInfo());

 /*   output:
       I am subadmin
        login for admin only
        { name: 'tom', email: 'tom@jerry.com' }

*/  