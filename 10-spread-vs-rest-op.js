// Spread v/s REST operator
// spread unpacks any object or array it gets while REST packs 
// the different values into the array.

// Spread

// const obj1 = {
//     'a' : 1,
//     'b' : 2,
//     'c' : 3
// }
// const obj2 = {
//     ...obj1
// };
// obj2['a'] = 5;
// console.log(obj1);
// console.log(obj2);
// op : { 'a':1 , 'b':2 , 'c':3 }
//      { 'a':5 , 'b':2 , 'c':3 }


// OR 

// const sum = (a,b) => {
//     return a+b;
// }
// const arr = [2,3];  // How many values we have in this array , it will always sum only first two
//                     // and rest all of the values will be ignored by sum function.
// console.log(sum(...arr)); // spread operator unpacks [2,3] to 2,3
// console.log(...arr);
// op : 5 
//      2 3

// REST 


// const sum = (...args) => {
//     let sum = 0;
//     for (const arg of args)
//         sum += arg;
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6));

// op : 21

// OR 

// const sum_multi = (a,b,...args) => {

//     let multi = a*b;
//     let sum = 0;
//     for (const arg of args)
//         sum += arg;
    
//     return [multi,sum];

// }

// console.log(sum_multi(2));
// console.log(sum_multi(2,3));
// console.log(sum_multi(2,3,1,1,1));

// op : [ NaN, 0 ]
//      [ 6, 0 ]
//      [ 6 ,3 ]
