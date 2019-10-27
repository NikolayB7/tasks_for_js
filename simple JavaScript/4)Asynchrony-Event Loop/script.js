console.log('Start');

console.log('start 2');

function timeOut() {
    console.log("Timeout2");
}

window.setTimeout(function () {
    console.log('inside timeout');

}, 3000)

setTimeout(timeOut, 2000);

setTimeout(function () {
    console.log("Set0");
}, 0)

// setTimeout == 0 все равно попадает в цикл событий и ожидает выполнения
//т.е код продолжает выполнение а данная ф-я ожидает выполнения (см. консоль)

console.log(('end'));
