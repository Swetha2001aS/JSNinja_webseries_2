// for

// console.log("heyy");
// for(i=0;i<10;i++){
//     i = i+3;
//     console.log(i);
// }


// WHILE
// let i=0;
// while(i<=5){
//     i=i+3;
//     console.log(i);
// }

// FUNCTIONS
// function greet(name) {
//     return `Hello ,${name}!`;
// }
// console.log(greet('meez'));


// // Function Expression
// const goodName = function(name){
//     return `hello, ${name}`
// }
// console.log(goodName('swetha'))

// // or 

// const goodName2 = console.log
// goodName2("swetha")

// Arrow Function 
// const greet = (nameing) => {
//     return`hello , ${nameing}`
// };
// console.log(greet('meenus'));


//use empty parentheses:
// const greet = () =>{
//     return `hellow world`;
// };
//  console.log(greet());

// Immediately Invoking Function Expression (IIFE)
// (function test(){
//   console.log("this is immediately invoked ")
// }) () 
// No need to call this function , 
// it will automatically invoked as the file executes 

// Higher-Order Functions
// function higherOrder(callback,name){
//     callback(name);
// }

// // call back 
// function callback(name){
//     console.log(`u r name is ${name}` );
// }
// // invoking higher order function
// higherOrder(callback,"callback")


// function argument
// default argumentd
// function multi(a,b=7){
//     return a*b;
// }
// console.log(multi(6));
// console.log(multi(6,3));

// Rest Parameters
// function myfunction(a,b, ...rest){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }  // no output ,its  an  example


//  Arguments Object
// function check(){
//     console.log(arguments)  //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, … }
//     console.log(...arguments) //    1 2 3 4 5
// }
// check(1,2,3,4,5);

// Named Arguments
// function namedfn({name,age}){
//     console.log(`${name} is ${age} year old`);
// }
// namedfn({name:"meez",age:"23"});

 // Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their containing scope during the compile phase before the code is executed. 


//  CREATE OBJECT
// Using Object Literal
// const person ={
//     firstName: "swetha",
//     lastName:"AS",
//     age:23,
//     skills:["js","css"]
//     };
// console.log(person.firstName);      //swetha
// console.log(person["age"]);         //23
// console.log(person["skills"][0]);   //js


// Using Constructor Function 
// function Point(x, y) {
//     // Set properties using 'this' keyword
//     this.x = x;
//     this.y = y;
//   }

  
//   // Create objects using the constructor
//   const point1 = new Point(5, 10);
//   const point2 = new Point(2, 8);
  
//   // Access properties
//   console.log(`Point 1: (${point1.x}, ${point1.y})`);
//   console.log(`Point 2: (${point2.x}, ${point2.y})`);
  


// Using Object.create() 
// const prototypeObj = {
//     getName(){
//         console.log(`your name is ${this.name}`);
//     },
//     place:"tsr",
//     getplace(){
//         console.log(`your place is ${this.place}`)
//     }
// }

// //create new object
// let newObject = Object.create(prototypeObj)
// //Adding properties to new object
// newObject.name ="swetha";
// newObject.getName();                //your place is swetha
// newObject.getplace();               //your place is tsr
// newObject.place = "kdlr";
// newObject.getplace();               //your place is kdlr


// console.log(newObject);            // Object { name: "swetha", place: "kdlr" }
// console.log(newObject.__proto__)  //Object { getName: getName(), place: "tsr", getplace: getplace() }


//inheritance
// function Base(v1,v2){
//     this.baseValue1 = v1;
//     this.baseValue2 = v2;
// }

// function Derived(v1,v2,v3){
//     Base.call(this, v1,v2); // calling the Base function with a 'this' value as of this function . So the properties of the Base will become the property  of the Derived 
//     this. derivedValue = v3;
// }

// let obj = new Derived(1,2,3)
// console.log(obj);    //Object { baseValue1: 1, baseValue2: 2, derivedValue: 3 }

//RETURN NON PRIMITIVE
// function constructor1(){
//     this.x = 40
//     return [1,2,3]
// }
// const obj1 = new constructor1
// console.log(obj1);              //Array(3) [ 1, 2, 3 ]

// //RETURN PRIMITIVE
// function constructor2(){
//     this.x = 40
//     return 1
// }
// const obj2 = new constructor2
// console.log(obj2);              //Object { x: 40 }

//THIS KEYWORD
console.log(this === window)  //true
console.log(this === globalThis)    //true

function check(){
    this.checkThis = function(){
        return this
    }
}
const obj = new check()
console.log(obj.checkThis() == obj)     //true


// Arrow functions
const obj2 = {
    checkThis: () => {
      console.log(this === obj2)             // false
      console.log(this === globalThis)       // true
    }
  }
  
  obj2.checkThis()


//   new KEYWORD
function person2(name3){
    this.name3 = name3;
}
let personobj = new person2("meez");
console.log(personobj);                     //Object { name3: "meez" }
