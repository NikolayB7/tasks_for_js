function hello() {
    console.log("Hello", this);

}

const person = {
    name: "John",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Name is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    }
}

// bind - передает кнтекст который передaем в функцию

const lena = {
    name: "Elena",
    age: 23
}
// person.logInfo.bind(lena)()
// const info = person.logInfo.bind(lena);
// info();

// person.logInfo.bind(lena, 'smm', '3322115')();

// lena - является контекстом(this) для ф-ии logInfo
//bind - возвращает новую ф-ю к которой привязал новый контекст, поэтому необходимо эту ф-ю вызвать ()
//после контекста в bind можно передать параметры необходимы для работы функции

// person.logInfo.call(lena, 'smm', '3322115');
// call - сразу возвращет результат выполнения функции в отдичии от
// bind который можно вызвать в нужный момент

// person.logInfo.apply(lena, ['smm', '3322115']);

// apply принимает 2 параметра в отдичии от call в который можно передать безконечное число параметров 
//если в apply необходимо передать несколько параметров то вторым мы передаем массив из аргументов которые попадут в функцию
//call и apply отличаются способом передачи данных, вызывают функцию сразу

// ***********************************

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     })
// }
// console.log(multBy(array, 5));


Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })

}

array.multBy(2);

console.log(array.multBy(2));



