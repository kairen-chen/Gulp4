import Expertise from "./expertise.js";
class Person {
    constructor(name, age , something) {
        this.name = name;
        this.age = age;
        this.something = something;
    }
    getInfo() {
        const expertise = new Expertise(this.something);
        return `${this.name} is ${this.age} year old \n 專長: ${expertise.getInfo()}`;
    }
}

export default Person;