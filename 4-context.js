// Learning about context in JS.

// In JavaScript, Hoisting is the default behavior of moving all
// the declarations at the top of the scope before code execution. 
// Actually , in javascript there is a global context and local context.
// Any function/variable which is defined in a global can be accessed
// anywhere due to code hoisting.
//  1.)  Function declarations are scanned and made available for execution.
//  2.)  Variable declarations are scanned and made undefined.

// 1.)
// fun();
// function fun() {
//     console.log('Function called !');
// }

// op : Function called !

// Output comes bcz all the function/variable definitions are attached to the global 
// context before the actual exectuion of the code.
// Within browser the global context is the window object. Although there is no window object 
// in the nodeJS.

// 2.)
// console.log(temp);
// var temp = 12;

// op : undefined

// This only happens with variables and functions which are defined using 
// var keyword.
// Variables that are defined without any keyword(let,var,const) inside any
// function or block are global variables and are
// available under global context(window incase of browser).
// Variables that are defined with var keyword or no keyword outisde
// all the functions and blocks are available under global context.
// let and const do not have global scope and have the block scope.

// ( Remember only pure functions are made available for execution. )
// Variables containing functions are made undefined or arrow functions.
// For ex.


// ------------------------------------------

// Some outputs :

// 0.
// var b = 10;
// c = 5;
// let d = 12;
// const func = () => {
//     a = 10;
// }

// func();
// console.log(b);
// console.log(a);
// console.log(c);
// console.log(d);
// console.log(window.b);
// console.log(window.a);
// console.log(window.c);
// console.log(window.d);

// op :
// 10
// 10
// 5
// 12
// 10
// 10
// 5
// undefined

// ------------------------------------------

// 1. a)
// console.log(a);
// function fun() {
//     a = 10;
// }
// fun();

// op : Error 'a' is not defined.


// 1. b)
// console.log(a);
// fun();
// function fun() {
//     a = 10;
// }

// op : Error 'a' is not defined.


// 1. c)
// fun();
// console.log(a);
// function fun() {
//     a = 10;
// }

// op : 10

// ------------------------------------------


// 2.
// console.log(a);
// let a = 10;

// op : Error 'a' not defined.


// ------------------------------------------


// 3.
// function codeHoist(){
//     a = 10;
//     let b = 50;
// }
// codeHoist();
// console.log(a);   10
// console.log(b);   ReferenceError : b is not defined

// op : 10
//      'b' not defined


// ------------------------------------------


// 4.
// var x = 10;
// function test()
// {
//     var x = 20;
// }
// test();
// console.log(x);

// op : 10


// ------------------------------------------


// 5.
// var x = 10;
// function test()
// {
//     var x = 20;
//     console.log(x);
// }
  
// test();
// op : 20


// ------------------------------------------


// 6.
// function codeHoist(){
//     a = 10;
//     let b = 50;
// }

// codeHoist();
// console.log(a);   // 10
// console.log(b);   // ReferenceError : b is not defined


// ------------------------------------------


// 7.
// let globalLet = "This is a global variable";
   
// function fun() {
//   let localLet = "This is a local variable";
// }
// fun();
// console.log(globalLet); // This is a global variable
// console.log(localLet); // localLet is not defined


// ------------------------------------------


// 8.
// let globalLet = "This is a global variable";
// function fun() {
//    localLet = "This is a local variable";
// }
   
// fun();
// console.log(globalLet); // This is a global variable
// console.log(localLet); // This is a local variable


// ------------------------------------------


// 9.
// let globalLet = "This is a global variable";   
// function fun() {
//   let globalLet = "This is a local variable";
//   console.log(globalLet);
// }
// fun();

// op : This is a local variable


// ------------------------------------------


// 10.
// function fun(){
//     function fun2(){
//          i = 100;
//     }
//     fun2();
//     console.log(i);
// }
// fun(); 

// op : 100


// ------------------------------------------


// 11.
// function fun(){
//     function fun2(){
//         let i = 100;
//     }
//     fun2();
//     console.log(i);
// }
// fun();

// op : i is not defined


// ------------------------------------------


// 12.
// function fun() {
//     var p = 1;
//     q = 1;
// }
// fun();
// console.log(q);

// op : 1


// ------------------------------------------


// 13.
// function fun() {
//     var p = 1;
//     q = 1;
// }
// console.log(q);
// fun();

// op : q is not defined


// ------------------------------------------


// 14.
// function fun() {
//     var p = 1;
//     q = 1;
// }
// console.log(p);
// fun();

// op : p not defined error

// Clear cut idea is , the variable without any variable specifier (var , let , const ) 
// are global variable or the variables that are defined outside all the functions 
// are known as global variables.
// The difference between let and var is that variables with let and const have a 
// block scope where as variables with var have a function scope.


// ------------------------------------------


// 15.
// function fun() {
//     {
//         var p = 10;
//         let q = 11;
//         console.log(p);
//         console.log(q);
//     }
//     console.log(p);
//     console.log(q);
// }
// fun();

// op: 10 11 10 error q is not defined.


// ------------------------------------------


// 16.
// function fun() {
//     console.log(p);
//     var p = '1';
// }
// fun();

// op : undefined


// ------------------------------------------


// 17.
// var x = 10;
// function test()
// {
//     console.log(x);
//     if (x > 20) {
//         var x = 50;
//     }
//     console.log(x);
//     console.log(x);
// }
// test();

// op : undefined
//      undefined
//      undefined


// ------------------------------------------


// 18.
// var x = 10;
// console.log(x);
// if (true) {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);

// op : 10 20 20
// The output is 10 20 20 because var has a function level scope therefore no new variable 
// will be created when we will define var x = 20 inside if instead it will update previous x's value.
// If we see closely the actual should be 10 20 10 but javascript behaves in a different way.
// To avoid such cases and get the desired output. We prefer IIFE(Immediately Invoked Function Expression)
// style of writing code.
// For ex .
// var x = 10;
// console.log(x);
// if(true) {
//     (function() {
//         var x = 20;
//         console.log(x);
//     })();
// }
// console.log(x);

// op : 10 20 10
// Here , the function defined inside the if block gets automatically called.


// ------------------------------------------


// 19.
// var x = 10;
// var x = 20;
// var x = 30;
// console.log(x);
// op : 30


// ------------------------------------------


// 20.
// let y = 10;
// let y = 20;
// let y = 30;
// op : identifier y has already been declared


// ------------------------------------------


// 21.
// let z = 1;
// if(true) {
//     let z = 2;
//     console.log(z);
// }
// console.log(z);

// op : 2 1


// ------------------------------------------


// 22.
// var x = 1;
// if(true) {
//     let x = 10;
//     console.log(x);
// }
// console.log(x);

// op : 10 1


// ------------------------------------------


// 23.
// var x = 10;
// console.log(x);
// function test()
// {
//     var x = 20;
//     console.log(x);
//     if (x > 10) {
//         let x = 30;
//         console.log(x);
//     }
//     console.log(x);
// }  
// test();
// console.log(x);

// op : 10 20 30 20 10


// ---------------------------------------


// 24.
// const fun = () => {
//     console.log(x);
//     if(true) {
//         var x = 10;
//     }
//     console.log(x);
// }
// fun();

// op : undefined 10

// ---------------------------------------

// 25.
// const fun = () => {
//     console.log(x);
//     if(false) {
//         var x = 10;
//     }
//     console.log(x);
// }
// fun();

// op : undefined undefined

// ---------------------------------------

// 26.
// console.log(this);

// op : {}
// this actually returns the scope that we are currently withtin.
// For ex. , here it is giving empty pair of braces bcz the default global scope of node is empty.
// If we run the same piece of code in browser then it will give window object as the output.

// ---------------------------------------

// 27.
// function test()
// {
//     if (false) {
//         var x = 50;
//     }
//     console.log(x);
//     console.log(y);
  
//     var y = 100;
//     console.log(y);
// }
// test();

// op : undefined undefined 100

// -----------------------------------------------

// 28.
// function test()
// {
//     foo();
//     bar();
//     function foo()
//     {
//         console.log('foo');
//     }
//     var bar = function() {
//         console.log('bar');
//     }
// }
// test();

// op : foo error: bar is not a function.


// -------------------------------------------------------

// 29.
// function foo() {
//     var c = 0;
//     let a = b = 0;
//     a++;
//     return a;
// }
// console.log(foo());
// console.log(typeof a);
// console.log(typeof b);
// console.log(b);
// console.log(typeof c);
// console.log(typeof d);

// op : 1 undefined number 0 undefined undefined

// Explanation : Here , b is made a global variable and not a scope variable
// by default bcz it directly do not have any of the variable specifier
// before it (let , const or var).

// -------------------------------------------------------

// 30.
// const fun = function() {
//     console.log(a);
//     let a = 1;
// }
// console.log(b);
// var b = 1;
// fun();

// op : undefined error

// -------------------------------------------------------

// 31.
// function f() {
//     var x = 2;
//     function f1() {
//         var x = 3;
//         function f2() {
//             var x = 4;
//             function f3() {
//                 x = 10;
//                 console.log(x);
//             }
//         }
//         console.log(x);
//     }
// }
// f();
// console.log(x);

// op : x is not defined


// -------------------------------------------------------