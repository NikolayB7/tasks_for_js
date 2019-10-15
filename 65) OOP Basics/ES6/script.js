// 'use strict'

//1
// Реализуйте класс Worker(Работник), который будет иметь следующие свойства: name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days
// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
// }
// let worker = new Worker('Иван', 'Иванов', 10, 30);
// let worker2 = new Worker('Михаил', 'Михайлов', 15, 25);
// let sumSalary = worker.getSalary() + worker2.getSalary();
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());
// console.log('Сумма зарплат двух рабочих: ' + sumSalary);

// ************************************

// Геттеры и сеттеры
// 2)Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. 

// 3)Модифицируйте класс Worker из предыдущей задачи следующим образом: 
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.
// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//         // this._salary = this._rate * this._days;
//     }

//     getName() {
//         return this._name;
//     }
//     getSurname() {
//         return this._surname;
//     }

//     setRate(rate) {
//         this._rate = rate;
//     }
//     setDays(days) {
//         this._days = days;
//     }
//     getRate() {
//         return this._rate;
//     }
//     getDays() {
//         return this._days;
//     }

//     getSalary() {
//         // return this._salary;
//         return this._rate * this._days;
//     }
// };

// let worker = new Worker('Иван', 'Иванов', 10, 30);
// let worker2 = new Worker('Иван', 'Иванов', 10, 30);

// /*
// console.log(worker.getName());
// console.log(worker.getSurname());
// console.log(worker.getRate());
// console.log(worker.getDays());
// console.log(worker.getSalary());
// */

// worker2.setRate(50);
// worker2.setDays(24);
// console.log(worker2.getSalary());

// **********************************************************

// 4)Реализуйте класс MyString, который будет иметь следующие методы: 
// метод reverse(), который параметром принимает строку, 
// а возвращает ее в перевернутом виде, 
// метод ucFirst(), который параметром принимает строку, 
// а возвращает эту же строку, сделав ее первую букву заглавной и 
// метод ucWords, который принимает строку и 
// делает заглавной первую букву каждого слова этой строки.


// class MyString {
//     constructor(str) {
//         this._str = str;
//     }
//     setReverse(str) {
//         let arr = str.split('').reverse().join('');
//         return arr;
//     }
//     setUcFirst(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     setUcWords(str) {
//         let arr = str.split(' ');
//         arr.forEach(element => {
//             let arrEl = element.charAt(0).toUpperCase() + element.slice(1);
//             let newArr = [];
//             newArr.push(arrEl);
//             // console.log(newArr);
//             return newArr;

//         });
//     }
// }

// let string = new MyString();

// console.log(string.setReverse('abcdefg'));
// console.log(string.setUcFirst('qazwsxedc'));
// console.log(string.setUcWords('qwer dfgghh jjnbvd'));

// ******************************************************

// 5) Реализуйте класс Validator, который будет проверять строки. 
// К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
// является ли она корректным емейлом или нет. 
// Если является - возвращает true, если не является - то false. 
// Кроме того, класс будет иметь следующие методы: 
// метод isDomain для проверки домена, 
// метод isDate для проверки даты и 
// метод isPhone для проверки телефона:

class Validator {
    constructor() {

    }
    setIsEmail(str) {
        let reg = /^[a-zA-Z0-9-_\.]+\@[a-z].?[a-z].?[a-z]/;
        return reg.test(str);
    }
    setIsDomain(str) {
        let reg = /^[a-zA-z]+\.+[a-z]/;
        return reg.test(str);
    }
    setIsDate(str) {
        let reg = /[0-3]+[0-9]+\.+[0-1][0-9]+\.[0-9]{4}$/;
        return reg.test(str);
    }
    setIsPhone(str) {
        let reg = (/^\+38(\s{1,})?((\([0-9]{3}\))|([0-9]{3}))(\s{1,})?[0-9]{2}(\s{1,})?[0-9]{2}(\s{1,})?[0-9]{3}(\s{1,})?$/);
        return reg.test(str);
    }



}

let validator = new Validator();

console.log(validator.setIsEmail('lksd2k@mail.ru'));
console.log(validator.setIsDomain('testDomain.com'));
console.log(validator.setIsDate('12.05.2280'));
console.log(validator.setIsPhone('+38(095)4647488'));

