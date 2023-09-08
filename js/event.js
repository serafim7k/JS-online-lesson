function changeText(element) {
    element.innerHTML = "Hello LOREM";
}

document.getElementById('sub_title_3').onclick = function () {
    this.innerHTML = "Hi, Lorem!!!";
}

function myFunc(element) {
    element.style.background = "yellow";
}

const currentDate = new Date();

const year = currentDate.getFullYear();
console.log(year);
const month = currentDate.getMonth();
console.log(month + 1);
const day = currentDate.getDate();
console.log(day);
const second = currentDate.getSeconds();
const minute = currentDate.getMinutes();
const hour = currentDate.getHours();

// alert(`Today: ${day}, ${month}, ${year}\nAnd current time: ${hour}:${minute}.${second}`);
