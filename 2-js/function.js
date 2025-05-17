function sayHello() {
    console.log("-------");
    console.log("Hello");
    console.log("-------");
}
sayHello(); 

const sayHi = () => {
    console.log("********");
    console.log("Hi");
    console.log("********");
}
sayHi(); // calling the function

function getName(name) { // function with parameter
    console.log("Name: " + name);
}
getName("John"); // calling the function with argument

function getInfo(name, age) { // function with multiple parameters
    console.log("Name: " + name);
    console.log("Age: " + age);
}
getInfo("John", 30); // calling the function with arguments

function add(a, b) { // function with return value
    return a + b;
}
const sum = add(5, 10); // calling the function and storing the return value
console.log("Sum: " + sum); // Sum: 15