/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subNumber1 = Number(document.querySelector('#subtract1').value); 
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    if (document.getElementById('member').checked) {
        let discount = subtotal * .20;
        subtotal -= discount;
    }
    const totalElement = document.getElementById('total')
    totalElement.textContent = subtotal
}

document.querySelector('#getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById('array');
arrayElement.textContent = numbersArray;

/* Output Odds Only Array */
let oddArray = numbersArray.filter(number => number % 2 == 1);
const oddArrayElement = document.getElementById('odds');
oddArrayElement.textContent = oddArray;

/* Output Evens Only Array */
let evenArray = numbersArray.filter(number => number % 2 == 0);
const evenArrayElement = document.getElementById('evens');
evenArrayElement.textContent = evenArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((total, number) => total + number, 0);
const sumArrayElement = document.getElementById('sumOfArray');
sumArrayElement.textContent = sumArray;

/* Output Multiplied by 2 Array */
let doubledArray = numbersArray.map((number) => number * 2);
const doubledArrayElement = document.getElementById('multiplied');
doubledArrayElement.textContent = doubledArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = numbersArray.map((number) => number * 2).reduce((total, doubledNumber) => total + doubledNumber, 0);
const sumOfMultipliedArrayElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedArrayElement.textContent = sumOfMultipliedArray;
