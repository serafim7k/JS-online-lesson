function hello() {
    const heading = document.querySelector('h1');

    if (heading.innerHTML === 'Hello!') {
        heading.innerHTML = 'Good Bye';
    }else{
        heading.innerHTML = 'Hello!';
    }
}
let counter = 0;

function count() {
    counter = counter + 1;
    document.querySelector('.sub_title').innerHTML = counter;
    alert(`Do you want to click this button and give number ${counter}`)
}