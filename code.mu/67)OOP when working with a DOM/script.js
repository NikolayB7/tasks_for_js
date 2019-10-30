/*
1)Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента
и затем может выполнять с ним различные операции.
*/

class Elem {
    constructor(selector) {
        this.el = document.querySelector(selector);
    }
    html(text) {
        this.el.innerHTML = text;
        return this;
    }
    append(text) {
        this.el.append(text);
        return this;
    }
    prepend(text) {
        this.el.prepend(text);
        return this;
    }
    attr(name, val) {
        this.el.setAttribute(name, val);
        return this;
    }



}

let elem = new Elem('.test');

// elem.html('!');
elem.attr('class', 'www');
elem.append('123');
elem.prepend('987');
elem.html('abc').attr('title', 'text');