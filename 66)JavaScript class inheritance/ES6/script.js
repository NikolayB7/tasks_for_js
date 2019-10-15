/*1)Реализуйте класс Student (Студент), который будет наследовать от класса User, 
подобно тому, как это сделано в теоретической части урока. 
Этот класс должен иметь следующие свойства: 
name (имя, наследуется от User), 
surname (фамилия, наследуется от User), 
year (год поступления в вуз). Класс должен иметь 
метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь 
метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
Текущий год получите самостоятельно.*/

class User {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getFullName() {
        return this.name + ' ' + this.surname;
    }
}

class Student extends User {
    _getNowYear() {
        let date = new Date();
        return date.getFullYear();
    }
    getCourse() {
        let course = this._getNowYear() - this.year;
        (course > 5) ? console.log('Вечный студент') : course;

    }
}





let stud = new Student('Nick', 'Bil', 2010);

console.log(stud.name);
console.log(stud.surname);
console.log(stud.year);



// console.log(stud.getFullName());
console.log(stud.getCourse());

