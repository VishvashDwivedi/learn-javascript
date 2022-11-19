// To Read :
// https://www.geeksforgeeks.org/advanced-javascript-backend-basics/
// https://www.geeksforgeeks.org/javascript-polyfilling-transpiling/?ref=rp
// https://derickbailey.com/2016/05/09/in-what-order-does-my-express-js-middleware-execute/

// Data types in JS

// var t1 = "Temp"; // string
// var t2 = 12; // number
// var t3 = 12.6549 // number
// var t4 = false; // boolean
// var t5 = undefined; // undefined
// var t6 = NaN; // Not a Number
// var t7 = { name : 'Vishwas' , Rno : 1834810119 }; // object
// var t8 = [1,2,3,'Four',false]; // object
// console.log(t6);
// console.log(typeof t7);

// var name = 'Hello World !';
// Backticks
// console.log(`My name is : ${ name } `);
// console.log(`My marks are : ${ Math.round(t3) }`);

// --------------------------------------------------------------------------

// Type coercion : when any number is converted to it's equivalent string.
// For ex . ,

// Here 2 is promoted to '2'
// console.log(2 + '2');
// console.log(2 + 2);

// if(2 == '2')
//     console.log('This is type coercion');
// else
//     console.log('Normal comparison');
// op : This is type coercion

// That is why we use '==='

// if(2 === '2')   console.log('Wrong comparison');
// else console.log('Correct comparison');

// --------------------------------------------------------------------------

// Falsy values : which evaluates to a false value when written inside if.
// undefined , null , 0 , '' , NaN are all falsy values.
// All the other values are truthy values.

// --------------------------------------------------------------------------


// Some output questions :

// 1.
// if([])  console.log('1');
// else    console.log('2');
// if({})  console.log('1');
// else    console.log('2');

// op : 1 1
// [] and {} are considered as truth value in JS


// -------------------------------------------------------------------


// 2.
// console.log(NaN === NaN);  // op : false
// console.log(NaN == NaN);   // op : false
// console.log([] == []);   // op : false
// console.log([] === []);   // op : false
// console.log({} == {});   // op : false
// console.log({} === {});   // op : false
// console.log(0 == false);   // op : true
// console.log(1 == true);   // op : true
// console.log(1 === true);   // op : false

// -------------------------------------------------------------------


// 3.
// console.log(undefined == null);     //  true
// console.log(undefined === null);    //  false
// console.log('' == null);            //  false
// console.log('' == undefined);       //  false
// console.log(undefined == []);       //  false


// ----------------------------------------------------


// 4.
// console.log( 'aa' - 'a');           // NaN
// console.log('11111dndjn' - 'nd');   // NaN
// console.log(1 - 'a');               // NaN
// console.log('a' - 1);               // NaN
// console.log(1 - {'a':2});           // NaN
// console.log(1 - [2,3]);             // NaN
// console.log('b' - 'a');             // NaN


// ----------------------------------------------------


// 5.
// Difference between undefined and null
// console.log(typeof undefined);           // undefined
// console.log(typeof null);                // object
// console.log(null === undefined);         // false
// console.log(null == undefined);          // true
// console.log(0 == null);                  // false
// console.log(0 === null);                 // false

// ----------------------------------------------------

// 6.
// var st = ("a").constructor;
// var temp = st('Tara ra ra');
// console.log(typeof temp);

// op : string

// ----------------------------------------------------

// 7.
// console.log(undefined + null);
// op : NaN

// ----------------------------------------------------

// 8.
// console.log(0 + null);
// op : 0

// ----------------------------------------------------

// 9.
// console.log(null + null);
// op : 0

// ----------------------------------------------------

// 10.
// console.log(undefined + undefined);
// op : NaN

// ----------------------------------------------------

// 47.
// console.log(1 + null);
// console.log(5 + null);
// op : 1 5


// ----------------------------------------------------

// 48.
// console.log(1+ undefined);
// NaN