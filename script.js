let currentValue = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('result').value = currentValue;
}

function operation(op) {
    if (op === '%') {
        // Convert the current value to a percentage (divide by 100)
        try {
            currentValue = (eval(currentValue) / 100).toString();
            document.getElementById('result').value = currentValue;
        } catch (error) {
            document.getElementById('result').value = 'Error';
            currentValue = '';
        }
    } else {
        currentValue += ` ${op} `;
        document.getElementById('result').value = currentValue;
    }
}

function clearAll() {
    currentValue = '';
    document.getElementById('result').value = '';
}

function clearOne() {
    currentValue = currentValue.slice(0, -1);
    document.getElementById('result').value = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue.replace('×', '*')).toString();
        document.getElementById('result').value = currentValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentValue = '';
    }
}