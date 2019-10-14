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

// 4)Реализуйте класс MyString, который будет иметь следующие методы: 
// метод reverse(), который параметром принимает строку, 
// а возвращает ее в перевернутом виде, 
// метод ucFirst(), который параметром принимает строку, 
// а возвращает эту же строку, сделав ее первую букву заглавной и 
// метод ucWords, который принимает строку и 
// делает заглавной первую букву каждого слова этой строки.

class MyString {
    constructor(str) {
        this._str = str;
    }
    setReverse(str) {
        return this._str = str;
    }

}

let string = new MyString();

console.log(string.setReverse('asdfgh'));


