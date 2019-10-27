const person = Object.create({
    calculeteAge() {
        console.log('Test');

    }
}, {
    name: {
        //ДЕСКРИПТОРЫ
        value: 'John',
        enumerable: true,
        writable: true,          //защита поля от редактирования по умолч false
        configurable: true
    },
    birthYear: {
        value: 1993,
        enumerable: false
    },
    age: {
        //ГЕТТЕРЫ и СЕТТЕРЫ
        get() {
            return 'Hello'
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value);

        }
    }
});

// person.name = "Elena"

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }


}



// console.log(person);
