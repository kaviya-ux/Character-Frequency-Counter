const textInput = document.getElementById("textInput");
const countButton = document.getElementById("countButton");
const result = document.getElementById("result");
const resultSection = document.getElementById("resultSection");
const errorMessage = document.getElementById("errorMessage");
const ignoreSpaces = document.getElementById("ignoreSpaces");


function countCharacters() {

    const text = textInput.value;

    if (text.trim() === "") {
        errorMessage.classList.remove("hidden");
        resultSection.classList.add("hidden");
        return;
    }

    errorMessage.classList.add("hidden");

    const frequency = {};

    for (let i = 0; i < text.length; i++) {

        const character = text[i];

        if (ignoreSpaces.checked && character === " ") {
            continue;
        }

        if (frequency[character]) {
            frequency[character]++;
        } else {
            frequency[character] = 1;
        }
    }

    displayResult(frequency);
}


function displayResult(frequency) {

    result.innerHTML = "";

    for (const character in frequency) {

        const card = document.createElement("div");

        card.className = "frequency-card";

        let displayCharacter = character;

        if (character === " ") {
            displayCharacter = "Space";
        }

        card.innerHTML = `
            <div class="character">${displayCharacter}</div>
            <div class="count">
                ${frequency[character]} time(s)
            </div>
        `;
        result.appendChild(card);
    }
    resultSection.classList.remove("hidden");
}
countButton.addEventListener("click", countCharacters);
