// https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

xhttp.open("GET", "http://127.0.0.1:5500/JS%202.0/AJAX/index.html", true);
xhttp.send();

function myFunction(data) {
    console.log(data);

}