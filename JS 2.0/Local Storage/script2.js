let count = 0;

document.querySelector('.btn').onclick = () => {
    count++;
    localStorage.setItem('b1', count);
}

// https://youtu.be/b_Ph0Yzatk4?t=689