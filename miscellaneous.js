// 1.
// for(var i=1;i<=5;i++) {
//     setTimeout(() => {
//         console.log(i);
//     },3000);
// }
// op : 6   (after 3 secs.)
//      6   (after 3 secs.)
//      6   (after 3 secs.)
//      6   (after 3 secs.)
//      6   (after 3 secs.)


// 2.
// for(var i=1;i<=5;i++) {
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// }

// op : 6  (after 1 sec.)
//      6  (after 2 secs.)
//      6  (after 3 secs.)
//      6  (after 4 secs.)
//      6  (after 5 secs.)

// Such output comes due to closure and lexical scoping.
// We have used var which is function scoped and not block scoped
// so every time setTimeout is called it creates a copy of i which points
// to original i.( Closure's , bcz there is a log call inside settimeout)
// Now in every iteration value of the i changes and no new instance of i 
// is created due to use of var keyword and finally the value of i becomes
// 6 after whole for loop ends and as soon as events in the callback
// queue's are executed , they prints the i, but this i was a 
// reference to i which is 6 now.
// So it prints 6.


// 3. Solution :
// for(let i=1;i<=5;i++) {
//     setTimeout(() => {
//         console.log(i);
//     },i*1000);
// }

// op : 1  (after 5 secs.)
//      2  (after 5 secs.)
//      3  (after 5 secs.)
//      4  (after 5 secs.)
//      5  (after 5 secs.)


// 4. Solution 2 :
// for(var i=1;i<=5;i++) {
//     ((j) => {
//         setTimeout(() => {
//             console.log(j);
//         },i*1000);    
//     })(i);
// }

// op : 1  (after 5 secs.)
//      2  (after 5 secs.)
//      3  (after 5 secs.)
//      4  (after 5 secs.)
//      5  (after 5 secs.)



