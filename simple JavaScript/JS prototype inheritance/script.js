// const person = {
//     name: "Maxim",
//     age: 25,
//     greet: function () {
//         console.log("Greet!");

//     }
// }

const person = new Object({
    name: "Maxim",
    age: 25,
    greet: function () {
        console.log("Greet!");

    }
});

Object.prototype.sayHello = function () {
    console.log("Hello");

}

//Наследование

const men = Object.create(person);
men.name = "John";

// const str = "I am string";
const str = new String("I am string");