function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return a / b;
}

function operator(x, y, op) {
    let result;
    switch (op) {
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = (multiply(x, y));
            break;
        case '/':
            result = divide(x, y);
            break;
        default:
            result = "error, not an operator.";
    }

    return result;
}

// alert(operator(12, 4, '/'));

let numButtons = document.querySelectorAll(".numBtn");
let opButtons = document.querySelectorAll(".op-btn");
let displayScreen = document.querySelector(".display-screen");

let selectedNumButton;
let selectedOpButton;
let numValue = 0;
let operand;
let bothNums =[];

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", (e) => {
        selectedNumButton = e.target.value;
        numValue += selectedNumButton;
        displayScreen.textContent = Number(numValue);
        operand = Number(numValue);
    });
});


opButtons.forEach((opButton) => {
    opButton.addEventListener("click", (e) => {
        selectedOpButton = e.target.value;
        console.log(operand);
        bothNums.push(operand);
        numValue = 0;
    });
});

let eqButton = document.querySelector(".eq-btn");
eqButton.addEventListener("click", () => {
    bothNums.push(operand);
    displayScreen.textContent = Number(operator(bothNums[0], bothNums[1], selectedOpButton));
});

