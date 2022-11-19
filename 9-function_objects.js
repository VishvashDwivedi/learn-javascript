// Function Objects in Javascript :

// const User = function(email,pass) {
//     this.email = email;
//     this.pass = pass;
//     this.print = function() {
//         console.log('User : ', email);
//     }
// };


// We can add functions to the above function object outside the object too.
// User.prototype.getPassword = function() {
//     console.log(`Your password is : ${this.pass}`);
// }

// We can add more properties too.
// User.prototype.Rno = undefined;


// const user1 = User('abc@gmail.com','abcdef');
// console.log(user1);
// const user2 = new User('cde@gmail.com','My@password');
// console.log(user2);
// user2.getPassword();
// user2.Rno = 1834810119;
// console.log(user2.Rno);


// op : undefined
//      User {
//          email : 'cde@gmail.com' ,
//          pass : 'password'
//      }
//      Your password is : My@password
//      1834810119

// Explanation : Using functions we can create objects too.
// Whenever we define a function object then this keyword inside 
// function points to the object itself and not global object.
// It is mandatory to write new keyword before creating function object  
// otherwise object will not be created instead undefined will be returned.
// While defining function objects we cannot user arrow functions bcz arrow 
// function do not have default binding with this keyword.