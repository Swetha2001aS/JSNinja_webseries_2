// console.log("heyy");
// for(i=0;i<10;i++){
//     i = i+3;
//     console.log(i);
// }

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
// console.log('meenus');


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
// function highrtOrder(callback,name){
//     callback(name);
// }

// // call back 
// function callback(name){
//     console.log(`u r name is ${name}` );
// }
// // invoking higher order function
// highrtOrder(callback,"callback")


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
// }  // no output ,its  aexample


//  Arguments Object
// function check(){
//     console.log(arguments)  //Arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, … }
//     console.log(...arguments) //    1 2 3 4 5
// }
// check(1,2,3,4,5);

// Named Arguments
function namedfn({name,age}){
    console.log(`${name} is ${age} year old`);
}
namedfn({name:"meez",age:"23"});
