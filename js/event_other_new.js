

document.getElementById('changeColor').addEventListener('click', function(){
    // let color = rendomColor()
    document.body.style.backgroundColor = rendomColor();
})

function rendomColor() {
    let elements = '0123456789ABCDE';
    let color = '#';

    for (let index = 0; index < 6; index++) {
        let gen_index = Math.floor(Math.random() * 15);

        let generate_elem = elements[gen_index];
        color = color + generate_elem;
        
    }

    return color;
}
let text = document.getElementById('changeText');
let paragraph = document.getElementById('paragraph');

text.addEventListener('click', function(){
    paragraph.innerHTML = 'Hello World';
})