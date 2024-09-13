let userTextBox = document.getElementById("input-container-text");
let checkButton = document.getElementById("check-button");
let inputContainer = document.getElementById("input-container");
let testVar = "test";
let isPalindrome = false;

const checkIfPalindrome = () => {
    alert("test");
}

const addResultLine = () => {
    if (userTextBox.value === "") {
        alert("Please enter a string.")
    } else {
        inputContainer.innerHTML += `<h4>"${userTextBox.value}" is not a palindrome.</h4>`;
    }
}


checkButton.addEventListener("click", addResultLine);