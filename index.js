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

function operator (x, y, op) {
    let result;
    switch (op) {
        case '+' :
        result = add(x, y);
        break;
        case '-' :
        result = subtract(x, y);
        break;
        case '*' :
        result = (multiply(x, y));
        break;
        case '/' :
        result = divide(x, y);
        break;
        default :
        result = "error, not an operator.";
    }

    return result;
}

// alert(operator(12, 4, '/'));