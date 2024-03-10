//STEP 1
function halfNumber(inputNumber) {
    let halfNum = inputNumber / 2
    console.log(`Half of ${inputNumber} is ${halfNum}.`)
    return halfNum
}

//STEP 2
function squareNumber(inputNumber) {
    let squareNum = inputNumber * inputNumber
    console.log(`The result of squaring the number ${inputNumber} is ${squareNum}.`)
    return squareNum
}

//STEP 3
function percentOf(num1, num2) {
    let calcResult = num1 / num2 * 100
    console.log(`${num1} is ${calcResult.toFixed(1)}% of ${num2}.`)
    return calcResult
}

//STEP 4
function findModulus(num1, num2) {
    let modulusResult = num1 % num2
    console.log(` ${num1} mod ${num2} is ${modulusResult}.`)
    return modulusResult
}

//STEP 5
// I dindn't find instructions for STEP 5...