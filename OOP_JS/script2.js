// ES6
'use strict'

class User {
    //в  constructor задаем наши свойства то что описывает обьект
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.avatar = "Photo";
    }
    //после конструктора пишем методы(что умеет делатькласс)
    deleteAvatar() {
        this.avatar = null;
    } //между методами "," и ";" ставить НЕЛЬЗЯ
}

//extends - наследование(как в ES5 prototype)
class Admin extends User {
    constructor(name, id) {
        super(name.id); //метод super() позволяет наследовать свойства прямо из конструктора прототипа.Могут быть не только свойства но и методы
        this.name = name;
        this.id = id;
        this.avatar = "Photo";
    }
    changeMyId() {
        this.id = 1;
        console.log('I am the boss');
    }
}

// const - усли не собираемся менять свою переменную, если будем менять то let
const adm = new Admin('Admin', 2);
const john = new User('John', 25);

console.log(john);
console.log(adm);


