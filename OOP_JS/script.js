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
}

// прототипный подход в ООП
User.prototype.daleteAvatar = function () {
    this.avatar = null;
}

var john = new User("John", 24);
var ivan = new User("Ivan", 30);

console.log(john);
console.log(ivan);
