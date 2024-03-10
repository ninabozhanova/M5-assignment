// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, operation) {
    let result 
    switch (operation) {
        case "+":
            result = x + y
            break
        case "-":
            result = x - y
            break
        case "*":
            result = x * y
            break
        case "/":
            result = x / y
            break
    }
    return result
}

// COLLECT A NUMBER FROM THE USER
function collectNumber (whichNumber) {
    let input = parseFloat(prompt(`Please enter your ${whichNumber} number`))
    if (isNaN(input)) {
        do {
            input = parseFloat(prompt(`You didn't enter a valid number. \nPlease enter your ${whichNumber} number again`))
        } while (isNaN(input));
    }
    return input
}

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
function collectOperation () {
    let operation = prompt('What operation would you like to perform? (+, -, *, /)').trim()
    if (!(operation === '+' || operation === '-' || operation === '*' || operation === '/')) {
        do {
            operation = prompt(`You didn't enter a valid operation\n What operation would you like to perform? (+, -, *, /)`).trim()
        } while (!(operation === '+' || operation === '-' || operation === '*' || operation === '/'));
    }
    return operation
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let runAgain = 'y'
while (runAgain === 'y') {
    let result
    let firstNumber = collectNumber ("first")
    let secondNumber = collectNumber ("second")
    let operation = collectOperation ()
    result = calculate (firstNumber, secondNumber, operation)
    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`)
    do {
        runAgain = prompt('Would you like to calculate something else? (y or n)')
    } while (!(runAgain === 'y' || runAgain === 'n'))
}