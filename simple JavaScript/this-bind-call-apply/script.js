function hello() {
    console.log("Hello", this);

}

const person = {
    name: "John",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function () {
        console.log("Name is ${this.name}");
        console.log("Age is ${this.age}");


    }
}