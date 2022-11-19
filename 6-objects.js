// Objects in Javascript !

// const obj = {
//     name : 'Vishvash Dwivedi',  // keys may/may not be 
//                                 //enclosed within double quotes
//     "rno" : 1834810119,
//     email : 'vishwashdwivedi26@gmail.com'
// };


// -------------------------------------------------------

// Providing new key-value pairs
// obj['age'] = 22;
// obj.stars = 3;

// obj[age] // throws error ! so whenever you use [ ] to access any key ,
//         //  make sure you provide key within double quotes.
// obj[name] // error too.

// -------------------------------------------------------

// Ways to access key - values.
// console.log(obj);
// console.log(obj['name']);
// console.log(obj.email);
// console.log(obj.stars);
// console.table(obj);

// -------------------------------------------------------

// iterates through keys.
// for(let i in obj)
//     console.log(i, obj[i]);
//     console.log(i,obj.i);  // this gives undefined bcz type of i is string and w cannot access 
//                            // any key like obj."name"
// }

// -------------------------------------------------------

// const ob = {
//     a : 1,
//     b : 2,
//     c : 3
// };

// -------------------------------------------------------

// prints keys
// for(let i of Object.keys(ob))
//     console.log(i);

// -------------------------------------------------------

// prints values in the form of strings
// for(let i in Object.keys(ob))
//     console.log(i);

// -------------------------------------------------------

// prints values
// for(let j of Object.values(ob))
//     console.log(j);

// -------------------------------------------------------

// for(let [k,v] of Object.entries(ob))
//     console.log(k,v);
// Object.keys(ob).forEach(k => console.log(k))

// -------------------------------------------------------

// freeze
// Object.freez(ob);
// - freezes the object or no more changes can be made to the object after it is freezed.

// -------------------------------------------------------

// Specifying functions inside of an Object.

// const obj = {
//     name : 'Vishvash Dwivedi',
//     rno : 1834810119,
//     email : 'vishwashdwivedi@gmail.com',
//     points : 0,

//     inc : function() {
//         this.points+=1;
//     },

//     print : function() {
//         console.log(this);
//     },

//     printmeagain : () => {
//         console.log(this);
//         // prints {} bcz this is not binded to the object in arrow functions.
//         // It prints {} (empty braces) bcz it prints global this.
//     }

// }

// console.log(obj.points);
// obj.inc();
// obj.inc();
// obj.inc();
// console.log(obj.points);
// obj.print();
// obj.printmeagain();

// -------------------------------------------------------

// 1.
// function fun2() {
//     console.log(this);
// }
// const obj = {
//     a : 1,
//     b : 2,
//     c : 3,
//     d : 4,
//     fun : function() {
//         console.log("Inside fun : " ,this);
//         console.log('\n');

//         function fun1() {
//             // Here this does not points to the current object bcz it is a regular(normal function)
//             // and not any object function.
//             // this that we access over here points to the global object (window incase of browser.)
//             console.log("Inside fun1 : ",this);
//             console.log('\n');
//         }

//         fun1();
//     }

// };
// console.log(this);
// console.log('\n');
// fun2();
// console.log('\n');
// obj.fun();

// op : {} (global object - window incase of browser)
//      global object (window incase of browser.)
//      Inside fun { a:1 , b:2 , c:3 , d:4 , fun:function object }
//      Inside fun1 global object (window incase of browser.)

// Rule : For all regular function calls , this points to window(global) object.
// Regular function means , normal functions that are not the part of any object.
// Although they may be defined inside any object function. For ex. fun1 above.

// -------------------------------------------------------

// 2.
// console.log([2,3] + {a:1});
// console.log(typeof ([2,3] + {a:1}));

// op : 2,3[object Object] string

// -------------------------------------------------------

// 3.
// const fun = function(b) {
//     b+=1;
// }
// const x = 1;
// let y = 1;
// var z = 1;
// console.log(x);
// console.log(y);
// console.log(z);
// this.x+=1;
// fun(x);
// fun(y);
// fun(z);
// console.log(x);
// console.log(y);
// console.log(z);
// op : 1 1 1 1 1 1

// -----------------------------------------------------------------

// Object de-structuring in JS !
// const arr = ['Vishwas' , 1834810119 , 21 ];
// const arrr = {
//     name : 'Tanishq',
//     rno : 1834840053,
//     age : 22
// };
// const [ Name , Rno , Age ] = arr;
// console.log(Name,Rno,Age);
// const { name , rno:x , age } = arrr;
// console.log(name,x,age);


// ----------------------------------------------------------------

// bind and call function - both does the same job. Difference is in
//      the syntax that bind returns the function that is binded with
//      another object so we need to call it explicitly.
//      While using call we can directly pass the object and funciton gets
//      called with another object.

// const obj1 = {
//     email : 'abc@gmail.com',
//     pass : 'abc@123',
//     logmydetails : function () {
//         // console.log(email, pass);    // throws error !
//         console.log(this.email, this.pass);
//     }
// };

// const obj2 = {
//     email : 'def@gmail.com',
//     pass : 'def@456',
// };

// const obj3 = {
//     email : 'ghi@gmail.com',
//     pass : 'ghi@789',
// };

// var log_obj2_s_details = obj1.logmydetails.bind(obj2);
// log_obj2_s_details();
// or
// obj1.logmydetails.bind(obj3)();
// or
// obj1.logmydetails.call(obj2);

// op : def@gmail.com def@456
//      ghi@gmail.com ghi@789
//      def@gmail.com def@456
