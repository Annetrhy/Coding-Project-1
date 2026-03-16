document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("feedback-form");
const charCount = document.getElementById("char-count");
const comments = document.getElementById("comments");
const errorMessage = document.getElementById("error-message");
const feedbackDisplay = document.getElementById("feedback-display");
const container = document.getElementById("form-container");

// Tooltip element
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);


// CHARACTER COUNT (keyboard/input event)

comments.addEventListener("input", function(){

let count = comments.value.length;
charCount.textContent = "Characters: " + count;

});


// EVENT DELEGATION FOR INPUT FIELDS

form.addEventListener("mouseover", function(event){

if(event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA"){

tooltip.style.display = "block";
tooltip.style.left = event.pageX + 10 + "px";
tooltip.style.top = event.pageY + 10 + "px";

if(event.target.id === "name"){
tooltip.textContent = "Enter your full name";
}

if(event.target.id === "email"){
tooltip.textContent = "Enter a valid email address";
}

if(event.target.id === "comments"){
tooltip.textContent = "Write your feedback here";
}

}

});


// MOUSEOUT EVENT

form.addEventListener("mouseout", function(){

tooltip.style.display = "none";

});


// PREVENT BACKGROUND CLICKS FROM TRIGGERING FORM EVENTS

container.addEventListener("click", function(event){

event.stopPropagation();

});
