// Арифметичні операції JS
//1 1. Стандартні оператори - +, -, *, /.

let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let a_str = 'My';
let b_str = 'string';
console.log(a_str + b_str);

console.log(1 + 3);
console.log(1+ '3');

// 2. Інкремент ++ (+1)
let a_2 = 100;
a_2++;
console.log(a_2);

// 3. Декремент -- (-1)
let b_2 = 100;
b_2--;
console.log(b_2);

// 4. Оператори порівняння - поверають true - false

let a_tr_fl = '5';
let b_tr_fl = 5;

console.log(a_tr_fl > b_tr_fl);
console.log(a_tr_fl >= b_tr_fl);
console.log(a_tr_fl <= b_tr_fl);
console.log(a_tr_fl == b_tr_fl);
console.log(a_tr_fl === b_tr_fl);

// 5. Anequal operators
console.log(a_tr_fl != b_tr_fl);
console.log(a_tr_fl !== b_tr_fl);

// 6. Logical operators &&(AND) ||(OR)

// && (AND)

console.log(true && true && true);
console.log(true && false && true);

console.log(100 > 10 && 30 < 40 && 10 == 10);

// || (OR)

console.log(true || true || true);
console.log(true || false || false);

let hour = 6;

if (hour < 10 || hour > 18){
    console.log('Office is closed!!!')
}

// Interact with user

alert('Hello World!!!'); // displays a modal window (notification) to user

// let result = prompt(title, default);

let result = prompt("What is your name?", "Max");

alert(`Hello, ${result}`);

let result_ = confirm("Are you adult?");

alert(`Adult = ${result_}`);