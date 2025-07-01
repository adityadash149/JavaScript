"use strict" // treats the js codes written to be executed as newer version

//alert ("Hello")
// since we are using node.js not the browser where the execution engines are embedded, alert() will work in browser
// to make alert() work in node.js, there is a different mechanism

console.log ("Hello")

let name="Adi"
let age=45
let isLoggnedIn= false

// number => 2^53

// bigint => 

// string => ""

// boolean => true, false 

let value=null
/*
null => standalone value, special type, representation of an empty value to a variable, 
here we can't say that 'value' stores boolean / int / fraction / .....
*/

// undefined => when value is not defined (or) not given to the already declared variable, it occurs when variable is declared but not initialized

// symbol => uniqueness, more used while reading react

// object

console.log (typeof(null)) // object
console.log (typeof(undefined)) // undefined