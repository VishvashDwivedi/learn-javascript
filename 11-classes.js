// Classes in Javascript !

// class User {

//     #rno;   // It is must to declare private fields before(anywhere inside class) 
//             //    defining them inside class otherwise it throws error !

//     constructor(email,pass,rno) {
//         this.email = email;
//         this.pass = pass;
//         this.#rno = rno;
//     }

//     age = undefined;    // it is also a property of the object.
//                         // we can define them in js using this way too.

//     getInfo() {
//         return {
//             email : this.email
//         }
//     }

//     #updatePass(newPass) {
//         this.pass = newPass
//     }

//     update(newP) {
//         this.#updatePass(newP);
//     }

// };

// const user1 = new User();
// const user2 = new User('abcd@lco.dev','mypassword');
// console.log(user1);
// console.log(user2);
// console.log(user2.rno);  // undefined
// console.log(user2.#rno);    // error
// user2.update('mypass2');
// console.log(user2);

// ----------------------------------------------------------------------

// Inheritance is also there in JS !

// class A {
//     hello1() {
//         console.log('A');
//     }
// }

// class C extends A{
//     hello2() {
//         console.log('C');
//     }
// }

// let c = new C();
// c.hello2();
// c.hello1();
// JS do not directly supports multiple inheritance but it does it 
// indirectly using mixins or 
// other stuff.

