let your_messege;

your_messege = "world";
console.log(your_messege);


let messege = "Hello World!!!";
console.log(your_messege);

if (true) {
    let messege = "Goodbye!!!";
    console.log(messege);
}

console.log(messege);




var var_messege = "Hello VAR";
console.log(var_messege);

if (true) {
    var var_messege = "Goodbye VAR";
    console.log(var_messege);
}

console.log(var_messege);

const speek = "lalala";
console.log(speek);

console.log(speek);

// let MyMessegeFirst = "Goodbye World";
// console.log(MyMessegeFirst);


// var name = "Mark";
// var name = "jek";

// console.log(name)
// console.log(name)

// Типи даних:
// 1. Рядокб стрічка - "string"
let str = 'String';
str = "My String";
str = `My String`;

console.log(str);

let _name = "Mark";

console.log(`Hello, ${_name}`);


// 2 Число - "number".
let number = 5;
let anothernumber = 256.356;

console.log(number * true);

// 3 Булевий тип - Boolean.
let check = true;
let checked = false;

console.log(check, checked);
// 4 Спеціальне значення - null.
let age = null;

console.log(age);
// 5 Спеціальне значення - undefined.

let x;

console.log(x);

//Object
let user = {
    _name: "Jake",
    age: 16,
    isAuth: true,
    jobs: {
        first: "Broker",
        second: "Builder",
    }
}

console.log(user.isAuth);
console.log(age);

let _user = "Jake1";
console.log(_user);

// Масиви (Array)

let arr = ['one', 'two', 'three', 26, true, ['Hello', 'ES6', true]];
console.log(arr[5][1]);
console.log(arr[1]);

arr[1] = 'TWO';
console.log(arr);
console.log(arr.length);

arr.push('four', 'six');
console.log(arr);

arr.pop();
console.log(arr);

let adddUnshift = arr.unshift('zero', 10);
console.log(arr);

arr.shift();
console.log(arr);

let arr_num = [1, 2, 23, 3, 4, 5, 12, 6, 7, 8, 9, 10, 11];
console.log(arr_num);

let str_arr = arr_num.join();
console.log(str_arr);
let str_arr1 = arr_num.join("-!");
console.log(str_arr1);

let revers_ = arr_num.reverse();
console.log(revers_);

let sort_ = arr_num.sort();
console.log(sort_);

let alphabet = ['Orange', 'Banana', 'Apple', 'Mango'];

alphabet.sort();
console.log(alphabet);

let alph_part = alphabet.slice(0, 2);
console.log(alph_part);