function hello() {
    console.log("Hello", this);

}

const person = {
    name: "John",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function () {
        console.log('Name is ${this.name}');

    }
}