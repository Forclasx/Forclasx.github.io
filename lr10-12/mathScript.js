// mathScript.js
function calculateFunction(x) {
    let result;

    try {
        if (x < 0) {
            result = 3 * Math.pow(x, 2) - x;
        } else if (x >= 0 && x <= 5) {
            if (7 - x < 0) {
                throw new Error("Корень из отрицательного числа");
            }
            result = Math.sqrt(7 - x);
        } else if (x > 5) {
            result = 8 * x - 3;
        } else {
            throw new Error("Недопустимое значение x");
        }
    } catch (error) {
        alert(error.message);
        return null;
    }

    return result;
}

function displayResults() {
    const inputs = [-1, 0, 2, 5, 6, 10];
    const resultsContainer = document.getElementById('results');

    inputs.forEach(x => {
        const result = calculateFunction(x);
        if (result !== null) {
            const resultText = `f(${x}) = ${result}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = resultText;
            resultsContainer.appendChild(resultElement);
        }
    });
}

window.onload = function() {
    const resultsButton = document.getElementById('resultsButton');
    if (resultsButton) {
        resultsButton.addEventListener('click', displayResults);
    }
};
