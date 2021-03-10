import Person from "./components/person.js";

const john = new Person("Guys", 40);
console.log(john.getInfo());

const calculate = (a, b) => a+b;
console.log(calculate(10,6));

const span = document.querySelector("header span");
span.textContent = `${john.name}`;