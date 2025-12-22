const users = [
  { id: 1, name: "Rabin", age: 25, role: "admin", active: true },
  { id: 2, name: "Sita", age: 22, role: "user", active: false },
  { id: 3, name: "Hari", age: 30, role: "user", active: true },
  { id: 4, name: "Gita", age: 28, role: "moderator", active: true },
  { id: 5, name: "Ram", age: 20, role: "user", active: false }
];

// Get all user names as an array.
all_user = users.map(user => user.name);
console.log(all_user);

// Find the user whose id is 3.
user_id = users.find(ids => ids.id===3);
console.log(user_id);

// Get all users with role "user".
user_role = users.filter(u_role => u_role.role=="user");
console.log(user_role);

// Check if at least one user is inactive.
stats = users.some( check => check.active == false);
console.log(stats);

// Count how many users are active.
const count = users.filter( cnt => cnt.active).length;
console.log(count);


// Get an array of users older than 25.
older = users.filter(usr => usr.age>25);
console.log(older);

// Create a new array where each user has an extra field isAdult (true if age ≥ 18).
const usersWithIsAdult = users.map(usr => {
  return {
    usr,
    isAdult: usr.age >= 18
  };
});
console.log(usersWithIsAdult);

// Remove the user whose id is 2.
remove = users.filter(usr => usr.id !==2);
console.log(remove);

// Get only the names of active users.
const actives = users.filter(usr => usr.active)
.map(usr=> usr.name);
console.log(actives);


// Find the average age of all users.
const avgage = users.reduce((Sum , usr) => Sum+usr.age ,0 )/ users.length;
console.log(avgage);


// Get the first inactive user.
const inactive = users.find(usr => !usr.active);
console.log(inactive);


// Convert the array into an object where keys are id and values are user objects.

// Check if all admins are active.
// Group users by their role.
// Sort users by age in ascending order. 

//Check if all admins are active

let totalAdmin = 0;
let totalAdminAndActive = 0;

users.forEach((user) => {
  if (user.role === "admin" && user.active === true) {
    totalAdminAndActive++;
  }
  if (user.role === "admin") {
    totalAdmin++;
  }

})

console.log(totalAdmin);
console.log(totalAdminAndActive);  