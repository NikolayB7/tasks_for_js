

function Slider(element) {
    var self = this;

    // all in dom
    this.dom = {
        element: document.querySelector(element),
        slide: this.dom.element.querySelectorAll('[data-slide]')

    };
    this.element = ;
    // select by data-ttr
    this.slide = this.element.querySelectorAll('img');
    this.prevBtn = this.element.querySelector('[data-prev]');
    this.nextBtn = this.element.querySelector('[data-next]');

    this.counter = 0;
    this.prevCounter = null;

    // refactor this
    var nextBtn = this.nextBtn;
    var prevBtn = this.prevBtn;
    var arr = self.slide;

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
        var slide = self.dom.slides[slideIndex];

    };

    // write this
    this.hideSlide = function (slideIndex) {

    };

    this.init();
}

var newSlider = new Slider('.slider');