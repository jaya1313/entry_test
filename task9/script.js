const text = document.getElementById("text");
const smallerBtn = document.getElementById("smaller");
const largerBtn = document.getElementById("larger");
const resetBtn = document.getElementById("reset");
const range = document.getElementById("range");
const display = document.getElementById("display");
const presetButtons = document.querySelectorAll(".presets button");

let fontSize = 16;

function updateUI() {
    text.style.fontSize = fontSize + "px";
    range.value = fontSize;
   // display.textContent = Current size: ${fontSize}px;

    smallerBtn.disabled = fontSize <= 10;
    largerBtn.disabled = fontSize >= 40;
}

smallerBtn.addEventListener("click", () => {
    if (fontSize > 10) {
        fontSize -= 2;
        updateUI();
    }
});

largerBtn.addEventListener("click", () => {
    if (fontSize < 40) {
        fontSize += 2;
        updateUI();
    }
});

resetBtn.addEventListener("click", () => {
    fontSize = 16;
    updateUI();
});

range.addEventListener("input", () => {
    fontSize = parseInt(range.value);
    updateUI();
});

presetButtons.forEach(button => {
    button.addEventListener("click", () => {
        fontSize = parseInt(button.dataset.size);
        updateUI();
    });
});

updateUI();