import "./js/main.js";
import Person from "./js/main.js";

const john = new Person("Kairen", 40);
console.log(john.getInfo());

const calculate = (a, b) => a+b;
console.log(calculate(10,6));

const span = document.querySelector("header span");
span.textContent = john.name;