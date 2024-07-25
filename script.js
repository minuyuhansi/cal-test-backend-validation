display = document.getElementById("display");
 resultDisplay = document.getElementById("result");
 historyDisplay = document.getElementById("history");
 currentInput = '';

document.addEventListener('keydown', (event) => {
    if (isValidKey(event.key)) {
        if (event.key === 'Enter') {
            calculateResult();
        } else {
            currentInput += event.key;
            display.value = currentInput;
        }
    }
})

function btnClick(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function isValidKey(key) {
    return (
        (key >= '0' && key <= '9') ||
        key == '+' ||
        key == '-' ||
        key == '*' ||
        key == '/' ||
        key == 'Enter'
    )
}

function calculateResult() {
    try {
        result = eval(currentInput);
        resultDisplay.textContent = result;
        historyDisplay.textContent = display.value + " = " + result ;
        currentInput = ''; 
        display.value = ''; 
    } catch (error) {
        resultDisplay.textContent = "Error";
        display.value = '';
    }
}