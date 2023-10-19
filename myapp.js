// console.log("Hello, world!");

// console.log( 200 );

// console.log( true );

// console.log( null );

// var num = 10;

// console.log( num );

// console.log( "string", 10.11, true, false, null, num );

//! Functions or subroutines;
// function makeCoffee (sugar, milk) {
//     var instructions = "Boil water,";
//     instructions += "pour into cup,";
//     instructions += "add coffee granules,";
//     instructions += "add" + sugar + "spoons of sugar,";
//     instructions += "add" + milk + " % milk.";
//     return instructions;
// }

// console.log(makeCoffee(2, 20));


//! Objects & Arrays
// Objects
// Objects are obvious and are defined by { }. We have nouns(key names) and adjectives(values) that describe the objects (properties). 
// We also have subroutines (methods) that are the actions we can perform on that object. It has a key name to point to the action
// {
//     color : 'red',
//     speed : 165,
//     maker : 'Volvo',
//     drive : function(){ ... },
//     stop : function(){ ... }
// }

//! Arrays
// They are lists that have elements
// [
//     0 : "Apple",
//     1 : "Orange",
//     2 : "Pear"
// ]

//! Object
// var car1 = {
//     color: "red",
//     speed: 200,
//     drive: function() {return "drive"; }
// };

// var shoppinglist = [
//     "Apple",
//     "Orange",
//     "Pear",
// ];

//! Embedding Objects & Arrays
// var car = {
//     make: "Volvo",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         make: "BMW",
//         fuel: "Petrol",
//         pistons: [ { maker: "BMW"}, {maker: "BMW2"} ]
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "string",
//     100,
//     ["embed", 200],
//     {car: "ford"},
//     function(){ return "drive";}
// ];

//! Member Access
// This is used for objects
// --.--
// example car1.make
// car1.engine.size
// car1.drive();
// var car = {
//     make: "Volvo",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         make: "BMW",
//         fuel: "Petrol",
//         pistons: [ { maker: "BMW"}, {maker: "BMW2"} ]
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "string",
//     100,
//     ["embed", 200],
//     {car: "ford"},
//     function(){ return "drive";}
// ];

// console.log(car.make);

//! Compulated Member Access
// //* --[]
// //* example car1.engine.pistons[0];
// //* array[0];
// //* array[4]
// //* array[4]()

//! Member Creation, Assignment & Deletion
// var car = {
//     make: "Volvo",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         make: "BMW",
//         fuel: "Petrol",
//         pistons: [ { maker: "BMW"}, {maker: "BMW2"} ]
//     },
//     drive: function(){ return "drive";}
// };

// var array = [
//     "string",
//     100,
//     ["embed", 200],
//     {car: "ford"},
//     function(){ return "drive";}
// ];

// console.log(car.make);
// car.model = "v60";
// car.color = "red";
// car.stop = function () { return "stop engine"  };
// delete car.color;
// delete car.stop;


//! Array Modification
// array[0] = "new string";
// array[0] += "concat";
// array[5] = "new string";
// array.length;
// array.shift()
// //* Takes off the first element
// array.pop();
// //* Takes off the last element
// array.unshift("string", 20, 20.22,);
// //* Inserts into the beginning of the array
// array.push(200, 300, string); 
// //* Adds to end of an array
// array.splice(2, 2);
// //* Removes two elements from index position (start) and deletes them. i.e I started at position 2 and deleted 2 elements
// array.splice(1, 0, 2003, "Hello", "world");
// //* Insert at position with removal and addition
// array.splice(2, 2, "World200");
// //* Used to replace elements in the array


//! Callable Objects
// function name()
// {
//     var fullname = "Lawrence Turton";

//     function concat(name) {
//         return "MR." + fullname;
//     }
    

//     return concat(fullname);
// }

// function name1(fullname1) {
//     return fullname1.firstname + fullname1.lastname;
// }
// console.log(name1({ firstname: "Lawrence", lastname: " Turton" }));


// function name2( fullname2) {
//     return fullname2;
// }

// console.log(
//     name2( function(){return "embed";} )
// );

// var obj = {embedded: { }};

//! Memory Hoisting
// Hoisting means to lift off
// 
// console.log( myName, printName() );

// var myName = "Lawrence";

// function printName() {
//     console.log(a, embed() );

//     var a = 100;

//     function embed(){ return "hello";}

//     return "John Doe";
// }

//! Scope & Closures
// var engine = {
//     maker: "Ford",
//     headGasket:{
//         pots:[
//             "piston1",
//             "piston2"
//         ]
//     }
// }

// function runExpression() {

//     var a =10;

//     function add() {
//         return a + 90;
//     }

//     return add();
// }

//* How to pull individual objects
// 
// engine.headGasket.pots[0];

//! Inferred Globals & Scope?
//*  Global Scope: Variables declared outside any function or block have a global scope. They are accessible from any part of the code.
// javascript
// var globalVar = "I am a global variable";

// function exampleFunction() {
//  console.log(globalVar); // This will output: "I am a global variable"
// }

//* Local Scope: Variables declared inside a function or block have a local scope. They are only accessible within that function or block.
// javascript
// function exampleFunction() {
//     var localVar = "I am a local variable";
//  console.log(localVar); // This will output: "I am a local variable"
// }

// console.log(localVar); // This will throw an error because localVar is not defined outside of the function

//* Inferred Globals are variables that are accidentally treated as global because they are not declared with the `var`, `let`, or `const` keyword. 
//* This can lead to unexpected behavior and bugs in the code.
// javascript
// function exampleFunction() {
//     globalVar = "I am a global variable";
// }

// exampleFunction();
// console.log(globalVar); // This will output: "I am a global variable"
//* In the above example, `globalVar` is not declared with a keyword, so it is treated as a global variable. This can be dangerous because it can lead to unintended modifications of global variables.
//* To avoid inferred globals, it is recommended to always declare variables with the appropriate keyword (`var`, `let`, or `const`). This helps to prevent bugs and makes the code easier to understand and maintain.
// javascript
// var globalVar;

// function exampleFunction() {
//     globalVar = "I am a global variable";
// }

// exampleFunction();
// console.log(globalVar); // This will output: "I am a global variable"
//* In this example, `globalVar` is declared with the `var` keyword, so it is clear that it is a global variable. This makes the code more predictable and easier to understand.


//! This Context
//console.log( this );

// var object = {
//     prop: this,
//     embed:
//     {
//         method: function(){ return this; }
//     }
// };

// var array = [
//     this,
//     function(){ return this; }
// ];

// function global(){
//     return this;
// }

//* Normal invokation
// global();
// object.embed.method();
// array[1]();

//* Assign context
// global.call( object );
// object.embed.method.call( object );
// array[1].call( object );

//* New context
// new global();
// new object.embed.method( object );
// new array[1]();

//! Constructors
// function Apple( x, y, color, score )
// {

//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.score = score;
// }

// var apple1 = new Apple(10, 20, "red", 200);
// var apple2 = new Apple(100, 70, "green", 100);
// var apple3 = new Apple(40, 90, "pink", 20);

//! Prototypes
// This means putting the methods shared by multiple objects in one function to save memory,
//! Constructors with Prototype
// function Apple(color, weight)
// {
//     this.color = color;
//     this.weight = weight;
// }

// Apple.prototype = {
//     eat: function(){ return "eat the apple"; },
//     throw: function(){ return "throw the apple"; }
// }

// var apple1 = new Apple("red", 99);
// var apple2 = new Apple("green", 109);
// var apple3 = new Apple("yellow", 299);


//! SECTION 3
//! Comparison Operators
//* ==: compares the left to the right. It's case sensitive
// 10 == 10;
// true
// 10 == 100
// false
//"hello" == "hello"
// true
//"hello" == "HELLO"
// false
//NaN == NaN
// false
//* Polymorphism?
// Polymorphism is a programming concept that allows you to write code that can work with different types of data without having to rewrite the code for each type. In JavaScript, polymorphism is achieved through the use of inheritance and interfaces.
//* === and !== : Don't polymorph
//* !=: Not equal to 
//* > ; >= ; < ; <=


//! If Statements
//* &&: and
//* ||: or
// var carsLeft = 1,
//     carsRight = 0,
//     greenMan = "yes";

// if ( greenMan ===  "yes" ){
//     console.log( 'cross the road' );
// }
// else if (greenMan === "yes" && (carsLeft === 0 || carsRight === 0 )){
//     console.log( 'All clear! Cross the road' );
// }
// else {
//     console.log( 'Stay where you are!')
// }

//! For & For in loops
// var classRegister = ["Lawrence", "John", "Jeff", ];

// console.log( classRegister[0] );
// console.log( classRegister[1] );
// console.log( classRegister[2] );

// for( var i = 0; i < classRegister.length; i++ ) {
//     console.log( classRegister[i] );
// }

// for( var k = classRegister.length - 1; k >= 0; k-- ){
//     console.log( classRegister[k]);
// }

//! For in loops
// for( var index in classRegister ){
//     console.log( classRegister[ index ] );
// }

//! ES6 Ecma Script 6
//* When using for loops use let
var symbolName = "value reference in memory";

let letSymbol = "scoped value";

const symName = "Constant value in memeory"

if (true){
    var symbolName = "value reference in memory";

    let letSymbol = "scoped value";

    const symName = "Constant value in memeory"
}