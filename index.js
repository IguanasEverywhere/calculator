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
            if (y === 0) {
                result = "Srsly? / 0!?";
            } else {
                result = divide(x, y);
            }
            
            break;
        default:
            result = "error, not an operator.";
    }

    return result;
}



let numButtons = document.querySelectorAll(".numBtn");
let opButtons = document.querySelectorAll(".op-btn");
let displayScreen = document.querySelector(".display-screen");

let selectedNumButton;
let selectedOpButton;
let numValue = 0;
let operand;
let allNums = [];
let allOps = [];
let runningTotal;
let maxLength = 10;

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", (e) => {
        selectedNumButton = e.target.value;
        numValue += selectedNumButton;

        if (numValue > maxLength) {
            numValue = numValue.substr(0, maxLength);
        }
        displayScreen.textContent = Number(numValue);
        operand = Number(numValue);
    });
});


opButtons.forEach((opButton) => {
    opButton.addEventListener("click", (e) => {
        eqButton.disabled = false;
        selectedOpButton = e.target.value;
        allNums.push(operand);
        numValue = 0;
        allOps.push(selectedOpButton);

        if (allNums.length === 1) {
            runningTotal = operand;
        } else {
            runningTotal = operator(runningTotal, allNums[allNums.length - 1], allOps[allNums.length - 2]);
        }
        if (!Number.isInteger(runningTotal)) {
            runningTotal = runningTotal.toFixed(7);
            runningTotal = parseFloat(runningTotal);
        }
        displayScreen.textContent = runningTotal;
    });
});

let eqButton = document.querySelector(".eq-btn");
eqButton.disabled = true;
eqButton.addEventListener("click", () => {
        allNums.push(operand);
        runningTotal = operator(runningTotal, allNums[allNums.length - 1], allOps[allNums.length - 2]);
        if (!Number.isInteger(runningTotal)) {
            runningTotal = runningTotal.toFixed(7);
            runningTotal = parseFloat(runningTotal);
        }
        displayScreen.textContent = runningTotal;
});

let clButton = document.querySelector(".clrBtn");
clButton.addEventListener("click", () => {
    displayScreen.textContent = 0;
    allNums = [];
    allOps = [];
    runningTotal = 0;
    numValue = 0;
});

