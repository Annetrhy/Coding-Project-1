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

