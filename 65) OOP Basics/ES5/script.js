//1
// Реализуйте класс Worker(Работник), который будет иметь следующие свойства:
//  name(имя), surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;

    this.getSalary = function () {
        return this.rate * this.days;
    }
}

var worker = new Worker('Иван', "Иванов", 10, 30);

console.log(worker);
console.log(worker.getSalary());

