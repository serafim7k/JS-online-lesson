console.log(location);
console.log(navigator.userAgent);
console.log(history);

(function () {
    let id = document.getElementById("_id");

    id.style.fontSize = "40px"
    id.style.color = "red"
    id.style.fontWeight = "400px"
}) ();

(function () {
    let classArr = document.getElementsByClassName("_class");

    for (let index = 0; index < classArr.length; index++) {
        classArr[index].style.color = "green";
        if (index == 2){
            classArr[index].style.color = "blue";
            classArr[index].style.fontSize = "30px";
        }
    }
}) ();

(function () {
    let tagArr = document.getElementsByTagName("p");

    for (let index = 0; index < tagArr.length; index++) {
        tagArr[index].style.color = "red";
        if (index == 1){
            tagArr[index].style.color = "blue";
            tagArr[index].style.fontSize = "30px";
        }
    }
}) ();

(function () {
    let element = document.querySelectorAll("input");
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = "yellow"
    }
}) ();

(function () {
    let element_ = document.querySelector("input");
    
    element_.style.backgroundColor = "green";
}) ();

(function () {
    let title = document.getElementById("title");
    let value_ = document.querySelector("input[type = 'text'").value;

    title.innerHTML = "My DOM Model!"
    title.innerHTML = value_;
    title.style.color = "green"
}) ();

(function () {
    let child = document.createElement("li");

    let text = document.createTextNode("Fifth Item!");

    child.appendChild(text);

    let parent = document.getElementById("list");

    parent.appendChild(child);
}) ();