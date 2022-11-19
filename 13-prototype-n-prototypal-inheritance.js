// In Javascript , everything is an object.

// Ever you wondered that when we declare an array we get access
// to several methods and all properties.
// This comes via the __proto__ property which is inherited by the
// object.
// Any variable or function will have a __proto___ property under
// which it will be having all the default properties and functions 
// defined such as length and forEach incase of arrays.
// This __proto__ is inherited from the prototype of data type 
// of that variable. 
// For ex.,
// var a = 2;
// console.log(a.__proto__);
// console.log(Number.prototype);

// op : [Number : 0]
//      [Number : 0]
// Both of the above values are same.
// So, a.__proto__ is same as Number.prototype or a.__proto___
// is inherited by Number.prototype

// One more ex.,
// Try to run this code on browser to get better understanding.

// let arr = [1,2];
// console.log(arr.__proto__);
// console.log(Array.prototype);

// op : []
//      []
// The arr.__proto__ comes from Array.prototype
// All the properties of functions that are available in an 
// arr actually comes from Array.prototype.

// Now one more amazing thing ,
// Since we know that every in js everything is an object.So ,

// Number.prototype, Array.prototype , Function.prototype etc.
// also has a __proto__ property which it inherits 
// from Object.prototype.
// We can test this by :

// console.log(Array.prototype.__proto__);
// console.log(Function.prototype.__proto__);
// console.log(String.prototype.__proto__);
// console.log(Number.prototype.__proto__);
// console.log(Date.prototype.__proto__);
// console.log(Object.prototype);

// All gives the same output , whether or browser or on Node.
// Try to run it on browser to get better understanding.
// This is known as prototype chaining or
// can be thought of as Prototypal inheritance.
// Object.prototype is the top of this chain ,
// and if we do ,

// console.log(Object.prototype.__proto__);
// This gives null.
// Bcz object is the top most unit in JS.


// One more cool example of Prototypal inheritance :
const object1 = {
    name: 'A',
    age: 22,
    getInfo() {
        console.log(`${this.name}'s age is ${this.age}`);
    }
};

const object2 = {
    name : 'B',
    age: 20
};

// Not a recommended practice in production level code.
// Can create lot of mess.
object2.__proto__ = object1;
object1.getInfo();
object2.getInfo();  // By using this we can access properties of object1
                    // within object2.

// What it does is, whenever we write a dot(.) operator after object name
// it searches that property of function within that object first.
// If it is found then the value of that property is used from there only.
// If not found then it searches inside the __proto__ object.
// If found it uses that property , if not then it searches the 
// __proto__.__proto__ and the chain continues untill __proto__.__proto__...
// becomes  null , still if the prop. or function is not found
// it says undefined.
















