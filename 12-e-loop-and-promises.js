// Event Loop in JS !

// const fun1 = () => {
//     console.log('1');
// }

// const fun2 = () => {
//     setTimeout(() => {
//         console.log('2');
//     },1000);
// }

// const fun3 = () => {
//     console.log('3');
// }

// fun1();
// fun2();
// fun3();

// op : 1 3 2
// Javascript program executes as -> It starts executing all the synchronous
// part and maintains a callback queue behind the scene for all async part , as soon as
// the output is returned back from any async call. It pushes it into the call back queue.
// After all synchronous part gets executed. It starts popping elements from the front of
// the queue and prints the answer.
// Remember it does not matter which async call is made first , whichever calls returns the response
// first , that is pushed into the callback queue first.



// -------------------------------------------------------------------


// Callback function : A function that is passed as an argument 
// to any function and it is called on the successfull execution 
// of that async function.

// Let us perform some async task using callbacks and not promises.

// const fun1 = (a,b,callbck) => {
//     setTimeout(() => {
//         callbck(a+b,undefined);
//     },2000);
// }

// fun1(5,6,(res,err) => {
//     console.log(res);
// });


// Callback Hell : Many callback functions which are nested one inside the 
// other is known as callback hell. It is called so bcz when many callback 
// functions are nested , it tends to be very difficult to understand 
// or debug the code. Promise chaining is the solution to the 
// callback hell.

// Callback Hell Example :
// const sum = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b);
//     }, 1000);
// }

// sum(1, 2, res => {
//     sum(res, 3, res1 => {
//         sum(res1, 4, res2 => {
//             console.log(res2);
//         });
//     });
// });


// --------------------------------------------------------------------------


// Definition of a promise :  "Promise is an object representing the eventual 
// completion or failure of an asynchronous operation. Essentially,
// a promise is a returned object to which you attach callbacks,
// instead of passing callbacks into a function.”.


// Performing same above task using promises.
// const fun2 = (a,b) => {
//     return new Promise((res,rej) => {
//         setTimeout(() => res(a+b),2000);
//     });
// }

// fun2(2,3)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

// -------------------------------------------------------

// Promises =>>

// const promise = new Promise((res,rej) => {
//     res('Resolve !');
// });

// promise
// .then((res) => {
//     console.log(res);
// })
// .catch((e) => {
//     console.log(e);
// });

// op : Resolve !
// A promise can be thought of as an object which ensures that either 
// it will get accepted or rejected in future.
// It takes in two functions conventionally called resolve and reject.
// If the promise gets full-filled , resolve is called and if promise
// gets rejected reject is called.

// Promise Hell
// const fun = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 1000);
//     });
// };

// fun(1, 2).then(res => {
//     fun(res, 3).then(res1 => {
//         fun(res1, 4).then(res2 => {
//             console.log(res2);
//         }).catch(e => console.log(e));
//     }).catch(e => console.log(e));
// }).catch(e => console.log(e));



// Any async function returns promises.

// ----------------------------------------------------------------------

// const fun1 = () => {
//     return 1;
// }

// const fun2 = async (time) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => { console.log(resolve(5));  console.log('hello'); }, time);
//         }).then((t) => {
//         return t;
//     });
// }

// const fun3 = () => {
//     return 3;
// }

// const fun = async () => {
//     let x = fun1();
//     console.log(x);
//     let y = await fun2(2000);
//     console.log(y);
//     let z = fun3();
//     console.log(z);
// }

// fun();

// op : 1
//      undefined (after 2 secs.)
//      hello
//      2  (after 2 secs.)
//      3  (after 2 secs.)

// Once resolved or reject is called it cannot be called again.
// and among resolve and reject , we can call only one.
// resolve can be thing of as an async function itself.
// For ex., in the above code we have the callback function inside setTimeout
// inside that function we have written console.log(resolve(2)) and console.log('hello')
// both of these log calls gets executed and resolve itself gets executed at the end
// That is why in op. undefined comes first from the first log call.
// hello comes second from the second log call and then the resolve is call is executed
// and control comes back to the await inside the function fun.
// Remember resolve never returns anything.
// That's why it gives undefined over there.
// Whether we specify a callback inside 'then' and then we try to return to
// return any value from it , still it returns undefined.It is the dafault behaviour
// of JS that resolve or reject will always return undefined.

// ----------------------------------------------------------

// function p2() {
//     return new Promise(r => {
//         setTimeout(() => {
//             console.log('eq'); 
//         }, 4000)
//     });
// }

// p2().then(() => console.log('DONE 1'))
// p2().then(() => console.log('DONE 2'));

// op : eq Done1 eq Done2 (all after 4 secs.)

// --------------------------------------------------------------


// const fun = (n) => {
//     if(n == 0 || n == 1)
//         return n;
//     return fun(n-1)+fun(n-2);
// }

// function p1() {
//     return new Promise(r => {
//         setTimeout(() => {
//             fun(38); r()
//         }, 1000)
//     })
// }

// p1().then(() => console.log('DONE 1'));
// p1().then(() => console.log('DONE 2'));

// op : DONE 1 (after around 5-6 secs)
//      DONE 2 (after around 10-12 secs)

// This is because NodeJS is not good for CPU intensive tasks.
// As it is single threaded and the task of computing the n-th fibonacci
// number is to be performed by Node itself. therefore ,
// if 100 requests comes to the server to compute the n-th fibonacci number
// the time required for the response to the n-th user will be
// n*(time taken to calculate n-th fibo. for one user).
// which will be too much even if value of n is small.
// That is the reason why NodeJS cannot be used for CPU-intensive
// applications. CPU-intensive here means any task which requires some
// calculation. For ex., + - * or divide.
// Even if we are calculating some value using binary search at the server.
// Then in that case too , we cannot use NodeJS.
// NodeJS can be best only for the applications which have some lightweight
// task to be done at the server side , such as database operations ,
// CRUD , file - I/O or any third party operation which is itself multi-
// threaded.
// That's all.
// Django can act as a good alternative for CPU-intensive applications.

// ------------------------------------------------------------------------

// Promise Chaining ---- 

// Let's say we have multiple asynchornous calls and we are using promises.
// Then ,

// const add = (a,b) => {
//     return new Promise((res,rej) => {
//         setTimeout(() => res(a+b),2000);
//     });
// }

// add(2,3)
// .then((sum1) => {
//     console.log(sum1);
//     add(sum1,4)
//     .then((sum2) => {
//         console.log(sum2);
//     })
//     .catch(err => console.log(err));
// })
// .catch(err => console.log(err));

// So , we can see the complexity of the code.
// As soon as our no. of async call increases the code becomes more 
// complex. Hence , we use Promise Chaining for this purpose.

// Same code can be written as ,

// add(2,3)
// .then(sum1 => {
//     console.log(sum1);
//     return add(sum1,4);
// })
// .then(sum2 => console.log(sum2))
// .catch(err => console.log(err));

// We just have a single catch for all the then calls.
// All we just need is to return the result of one then call to the other.
// This is promise chaining.
