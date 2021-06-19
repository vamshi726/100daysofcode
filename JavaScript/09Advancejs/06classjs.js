/*
   Class properties are public by default and can be examined or modified outside the class.
   There is however a stage 3 proposal to allow defining private class fields using a hash # prefix.
*/


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }

  login() {
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

module.exports = User;


const rock = new User ("rock","rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular bcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

/*
    output:
    { name: 'rock', email: 'rock@rock.com' }
    [ 'Angular bcamp' ]
    undefined
*/  