

let inputTag = document.getElementById("inputtag"); // for getting num
let addBtn = document.getElementById("btn"); // for add button
let colInput= document.getElementById("color"); // for color
let dropdown= document.getElementById("dd"); // what user has chosen
let cont = document.getElementById("container"); // container div


addBtn.addEventListener("click", function() {
    let num = inputTag.value;
    inputTag.value = ""; // clear the input field after getting the value

    cont.innerHTML = ""; // clear the container before adding new elements

   for(let i = 0; i < num; i++) {
    let color = colInput.value;
    let shape = dropdown.value;

    let ele= document.createElement("div"); // create a new div element
    ele.classList.add(shape);
    ele.style.backgroundColor = color; // set the background color

    cont.appendChild(ele); // append the new div to the cont pointer
   }

});