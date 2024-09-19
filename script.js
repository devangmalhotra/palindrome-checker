let userTextBox = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let inputContainer = document.getElementById("input-container");
let testVar = "test";
let isPalindrome = false;
let resultDiv = document.getElementById("result-div");

const checkIfPalindrome = () => { 
    let phrase = userTextBox.value;
    let originalCharsArray = [];
    let reversedCharsArray = [];
    let originalCharsString = "";
    let reversedCharsString = "";
    
    for (i = 0; i < phrase.length; i++) {
        originalCharsArray.push(phrase[i]);
    }

    for (i = (phrase.length - 1); i >= 0; i--) {
        reversedCharsArray.push(phrase[i]);
    }

    originalCharsString = originalCharsArray.join("");
    reversedCharsString = reversedCharsArray.join("");

    isPalindrome = originalCharsString === reversedCharsString;

    addResultLine();

    return;
}

const addResultLine = () => {
    if (userTextBox.value === "") {
        alert("Please enter a string.")
    } else if (isPalindrome === false) {
        inputContainer.innerHTML += `<p>"${userTextBox.value}" is not a palindrome.</p>`;
    }
}


checkButton.addEventListener("click", checkIfPalindrome);