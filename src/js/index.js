import Person from "./components/person.js";

const sayHello = new Person("Hello! Guys", 23, "sleep , appreciate the movie");
console.log(sayHello.getInfo());

const calculate = (a, b) => a+b;
console.log(calculate(10,6));

const span = document.querySelector("header span");
span.textContent = `${sayHello.name}`;

console.log(process.env.test)
