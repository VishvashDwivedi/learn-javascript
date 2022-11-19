// Closure in Javascript ---

// 1.
// const fun = (a) => {
//     return (b) => {
//         return a+b;
//     };
// }

// const f = fun(4);
// console.log(f(5));
// console.log(fun(5)(5));      // Curring

// op : 9 10 
// Explanation : When we call function fun and return another 
// function from it, then also the reference of function fun does 
// not goes away from memory , so the access of variable a
// remains available for further it's call.


// --------------------------------------------------------------------


// 2.
// const fun = (a) => {
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }
// console.log(fun(1)(2)(3));       // Curring (This syntax is called curring.)
// op : 6
// Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c).



