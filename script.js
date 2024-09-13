let userTextBox = document.getElementById("input-container-text");
let checkButton = document.getElementById("check-button");
let inputContainer = document.getElementById("input-container");
let testVar = "test";
let isPalindrome = false;

const checkIfPalindrome = () => { //use toString to convert array to string
    let phrase = userTextBox.value;
    let originalCharsArray = [];
    let reversedCharsArray = []
    for (i = 0; i < phrase.length; i++) {
        originalCharsArray.push(phrase[i]);
    }

    for (i = (phrase.length - 1); i >= 0; i--) {
        reversedCharsArray.push(phrase[i]);
    }
    if (reversedCharsArray == originalCharsArray) {
        alert(yes);
    }

    alert(reversedCharsArray === originalCharsArray);
    alert(reversedCharsArray);
    alert(originalCharsArray);

    return;
}

const addResultLine = () => {
    if (userTextBox.value === "") {
        alert("Please enter a string.")
    } else {
        inputContainer.innerHTML += `<h4>"${userTextBox.value}" is not a palindrome.</h4>`;
    }
}


checkButton.addEventListener("click", checkIfPalindrome);