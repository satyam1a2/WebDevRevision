

// for Start_JS_3 html file


// let ptr = document.getElementById("iimage"); 
// ptr.src = "https://www.w3schools.com/images/w3schools_green.jpg" 

// Use  " let img= document.querySelectorAll("img") to select more than one imazes 
// so img will be node list
// img[i].src = path OR
// img[i].setAttribute("src", path)
// to change the imazes 


// ptr.addEventListener("click", function() {
//     console.log("Image is clicked")
// })



// for changeByJs html file

// let allDivs = document.querySelectorAll("div");        // All <div> elements
// let boxes = document.querySelectorAll(".box");         // All elements with class="box"
// let button = document.querySelectorAll("#submit");     // The element with id="submit"
// let inputs = document.querySelectorAll("input[type='text']"); // All text input fields

 let box= document.querySelector(".box");         // select one only

// box.classList.add("circle"); // add a new class
// box.classList.remove("circle"); // remove a class

// box.classList.toggle("circle"); // toggle a class (add if not present, remove if present)

// console.log(box.classList);


let h1tag = document.createElement("h1"); // h1 tag is created

h1tag.innerHTML = "h1 tag made through js"; // add text to the h1 tag

box.appendChild(h1tag); // add the h1 tag to the box div