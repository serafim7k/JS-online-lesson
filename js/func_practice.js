// visibility space - Scope

// function len(str) {
//     return str.length;
// }

// console.log(len('123456789'))

function array(lst) {
    let num_lst = []
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] % 2 === 0){
            num_lst.push(lst[i]);
        }
    }
    return num_lst;
}

console.log(array([1, 2, 3, 4, 5, 6, 7, 8, 9]));