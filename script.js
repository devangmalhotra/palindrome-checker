let userText = document.getElementById("input-container-text");
let checkButton = document.getElementById("check-button");
let inputContainer = document.getElementById("input-container");
let testVar = "test";

const checkIfPalindrome = () => {
    alert("test");
}

const addResultLine = () => {
    inputContainer.innerHTML += `<h4>${testVar}</h4>`;
}


checkButton.addEventListener("click", addResultLine);