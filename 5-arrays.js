// Arrays in Javascript !
// ------------------------------------------------

// Creation :
// l = [1,2,3,4];
// m = new Array(5,6,7,8);
// n = [ 'Apple', 'Mango', 'Banana', 2, true, {_id:1834810119 , name:'Vishvash'}];


// ---------------------------------------------------


// Printing :
// console.log(l[0],l[1],l[2],l[3]);
// console.log(m[0],m[1],m[2],m[3]);

// ---------------------------------------------------

// let l = [1,2,3,4,5,6,7,8];
// l.forEach(e => console.log(e));

// ---------------------------------------------------

// l.forEach(e => {
//     e = e + 1;  // does not modifies the original element.
//     console.log(e);
// });
// console.log(l);

// ---------------------------------------------------

// for(let i=0;i<l.length;i++)
//     console.log(l[i]);

// ---------------------------------------------------

// for(let i of l) {
//     console.log(i);
//     i+=1;  // doest not modifies the original values
// }
// console.log(l);

// ---------------------------------------------------


//  Push at Back - takes the element/s to add at the back of the array
//  and returns new length of the array.

// let l = [1,2,3];
// var newLength = l.push(5);
// console.log(newLength);
// console.log(l);
// newLength = l.push(6,7,8,9,10);
// first 6 will be pushed then 7 , then 8 and so on......

// console.log(newLength);
// console.log(l);
// l.push([11,12]);
// console.log(l);


// ---------------------------------------------------

// pop from back - deletes and returns the last element of the array :

// l = [1,2,3,4,5];
// let el = l.pop();
// console.log(el);
// console.log(l);
// el = l.pop();
// console.log(el);
// console.log(l);

// ---------------------------------------------------


// unshift - Push in front :
// adds element(s) to the front of the array and returns the new length.

// l = [1,2,3];
// var L = l.unshift(0);
// L = l.unshift(-1);
// L = l.unshift(-4,-3,-2);
// console.log(L);
// console.log(l);
// first -2 will be pushed , then -3 then -4
// so output will be [ -4,-3,-2,-1,0,1,2,3,4 ]


// ---------------------------------------------------


// shift - pop first element from front and returns that element :
// var l = [1,2,3];
// var el = l.shift();
// console.log(el);
// console.log(l);

// ---------------------------------------------------

// find the index of any element :
// let l = [0,1,2,3,4,5,5];
// let idx1 = l.indexOf(4);
// let idx2 = l.indexOf(5);
// console.log(idx2);

// If element is not present returns -1.

// ---------------------------------------------------

// To create an array from String.
// const arr = Array.from("ABCDEFGH");
// console.log(arr);
// op : [ 'A','B','C','D','E','F','G','H' ]

// ---------------------------------------------------

// every - returns true if for every value in the array the callback in
// every returns true.
// For ex.,
// l1 = [2,4,6,8];
// l2 = [1,2,4,6];
// console.log(l1.every(ele => ele%2 == 0));
// console.log(l2.every(ele => ele%2 == 0));


// ---------------------------------------------------

// fill - returns the current list with its value equal to specified values.
// Moreover, modifies the original array too.
// For ex .,
// let l1  = [1,2,3,4,5];
// console.log(l1.fill(undefined));
// console.log(l1);

// We can even provide a start and end index as well.
// For ex. ,
// let l1 = [1,2,3,4,5];
// let l2 = [1,2,3,4,5];
// console.log(l1.fill(0,0,3));
//                 (value to be put , start index , end index)
//                         -          inclusive     exclusive           
// console.log(l1);
// l2.fill(0,2,4);
// console.log(l2);


// ---------------------------------------------------


// filter - return new array with elements for which the callback functions 
// return any true value.
// does not changes original list.
// let l1 = [1,2,3,4,5,6];
// console.log(l1.filter(el => !(el%2) ));
// console.log(l1);

// ---------------------------------------------------

// map - returns a new and modified array.
// let l1 = [1,2,3,4,5];
// console.log(l1.map(e => e*e));
// console.log(l1);

// ---------------------------------------------------

// slice - returns the subarray.
// format -> arr.slice(start,end)
// start is inclusive.
// end is exclusive.
// If we provide only starting index , it assumes end to be lastindex + 1.
// does not modifies the array.
// For ex.,
// let l1 = [0,1,2,3,4,5,6,7,8,9];
// console.log(l1.slice(0));
// console.log(l1.slice(3));
// console.log(l1.slice(3,8));
// console.log(l1);

// ---------------------------------------------------

// splice - returns undefined.
// replaces the complete subarray with values specified.
// modifies the array.
// syntax -> ar.splice(start idx, no. of elements to remove from start idx, value1 , value2 , value3 .....);
// start idx => inclusive.

// let l1 = [0,1,2,3,4,5];
// l1.splice(0,3,[null,null]);
// console.log(l1);
// op : [ [null,null] , 3 , 4 , 5 ]

// let l1 = [0,1,2,3,4,5];
// l1.splice(0,l1.length,1);
// console.log(l1);
// op : [1]

// let l1 = [0,1,2,3,4,5];
// l1.splice(1,4);
// console.log(l1);
// op : [0,5]

// let l1 = [0,1,2,3,4,5];
// l1.splice(1,4,10,11,12,13);
// console.log(l1);
// op : [0,10,11,12,13,5]

// ---------------------------------------------------

// No -ve indexing ,like python, is there in the javascript.
// As soon was we write any such index which is not 
// there in the array we get undefined as the result.
// let l1 = [1,3,4];
// console.log(l1[-1]);
// console.log(l1[10]);
// console.log(l1[100]);
// op : undefined undefined undefined

// ---------------------------------------------------


// 1.
// const clothes = ['siddhant', 'vishwas'];
// console.log(clothes[-1]);
// clothes.length = 0;
// console.log(clothes[0]);
// console.log(clothes[10]);


// op : undefined undefined undefined
// Explanation :  By changing length of array explicitly we actually delete
// the (n-length specified) number of delements from the last of the array.


// -----------------------------------------------------------

// 2.
// function arrayFromValue(item) {
//     if (item < 1) return []
//     return [item] + arrayFromValue(item - 1);
// }
// console.log([1]+[2,3,4]+[5]);
// console.log(arrayFromValue(2 + 1));
// console.log(arrayFromValue(3 - 1));

// op : 12,3,45  321  21

// ------------------------------------------------------------

// 3.
// console.log('abcd' + [1,2]);
// op : abcd1,2

// ----------------------------------------------------------

// 4.
// console.log(1 + [1,2]);
// op : 11,2

// ----------------------------------------------------------

// 5.
// const arr = [7]*2;
// console.log(arr);

// op : 14

// ----------------------------------------------------------

// 6.
// const arr = [2,3]*5;
// console.log(arr);

// op : NaN

// ----------------------------------------------------------

// 7.
// function fun(a,b) {
//     return a+b;
// }
// console.log(fun([1,2]));

// op : 1,2undefined

