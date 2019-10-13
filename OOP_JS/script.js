// ES5

function User(name, id) {
    // контекст вызова через this
    this.name = name;
    this.id = id;
    this.avatar = "Photo";
    // функциональный подход в ООП;john и ivan наследуют данный метод
    // this.daleteAvatar = function () {
    //     this.avatar = null;
    // }
};

// прототипный подход в ООП
User.prototype.daleteAvatar = function () {
    this.avatar = null;
}

function Admin(name, id) {
    this.name = name;
    this.id = id;
    this.avatar = "Photo";
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.changeMyId = function () {
    this.id = 1;
    console.log('I am the boss');

}

var adm = new Admin('Admin', 2);

var john = new User("John", 24);
var ivan = new User("Ivan", 30);

console.log(john);
console.log(ivan);
console.log(adm);
