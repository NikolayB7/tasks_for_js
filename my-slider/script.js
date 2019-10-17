

function Slider(element) {
    var self = this;

    // all in dom
    this.dom = {
        element: document.querySelector(element),
        slide: document.querySelectorAll('[data-slide]'),
        prevBtn: document.querySelector('[data-prev]'),
        nextBtn: document.querySelector('[data-next]')

    };

    this.counter = 0;
    this.prevCounter = null;

    // refactor this
    var nextBtn = this.dom.nextBtn;
    var prevBtn = this.dom.prevBtn;
    var arr = this.dom.slide;



    this.setCounter = function (val) {
        self.prevCounter = self.counter;
        self.counter = val;
    }

    this.init = function () {
        self.toggle();
        nextBtn.addEventListener('click', self.next);
        prevBtn.addEventListener('click', self.prev);
    }

    this.next = function () {
        var nextCounter = self.counter + 1;
        if (nextCounter >= arr.length) {
            nextCounter = 0;
        }
        self.setCounter(nextCounter);
        self.toggle();
    };

    // write prev
    this.prev = function () {

    };

    this.toggle = function () {
        if (self.prevCounter !== null) {
            self.hideSlide(self.prevCounter);
        }
        self.showSlide(self.counter);
    }

    // write this
    this.showSlide = function (slideIndex) {
        var slide = self.dom.slide[slideIndex];
        slide.style.display = "block";

    };

    // write this
    this.hideSlide = function (slideIndex) {

    };

    this.init();
}

var newSlider = new Slider('.slider');

