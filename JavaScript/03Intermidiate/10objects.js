//Object : An object is a collection of properties, and 
//        a property is an association between a key and a value

var user = {
    firstName: "Vamshi",
    lastName: "Muluguri",
    role: "Admin",
    loginCount: 34,
    facebookSignedIn :true

};

console.log("firstname is: ",user.firstName);
user.loginCount = 45;
console.log("login count: ",user.loginCount);
console.log(user);

console.table(user);

/*
firstname is:  Vamshi
login count:  45
{
  firstName: 'Vamshi',
  lastName: 'Muluguri',
  role: 'Admin',
  loginCount: 45,
  facebookSignedIn: true
}
┌──────────────────┬────────────┐
│     (index)      │   Values   │
├──────────────────┼────────────┤
│    firstName     │  'Vamshi'  │
│     lastName     │ 'Muluguri' │
│       role       │  'Admin'   │
│    loginCount    │     45     │
│ facebookSignedIn │    true    │
└──────────────────┴────────────┘

*/

