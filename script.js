function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    if (operator === '+'){
        let result = add(num1, num2);
        return result;
    }
    else if (operator === '-'){
        let result = subtract(num1, num2);
        return result;;
    }
    else if (operator === '*'){
        let result = multiply(num1, num2);
        return result;
    }
    else if (operator === '/'){
        let result = divide(num1, num2);
        return result;
    }
};

function calculateArray(arr){
    let result;
    if (arr.length === 1){
        return arr[0];
    } else {
        let result = operate(Number(arr[0]), arr[1], Number(arr[2]));
        arr.splice(0, 2);
        arr[0] = result;
        return calculateArray(arr);
    }
};

let displayContent = document.querySelector('#displayText');

let numberButtons = document.querySelectorAll('.inputButton');

let operatorButtons = document.querySelectorAll('.operatorButton');

let calcInput = '';

function inputSomething(input){
    calcInput += input;
    displayContent.textContent = calcInput;
}

function erase(){
    if (calcInput[calcInput.length - 1] === " "){
        let erased = calcInput.slice(0, -2);
        calcInput = erased;
        displayContent.textContent = calcInput;
    } else {
        let erased = calcInput.slice(0, -1);
        calcInput = erased;
        displayContent.textContent = calcInput;
    }
};

function clear(){
    calcInput = '';
    displayContent.textContent = calcInput;
}

let inputOne = numberButtons[0];
inputOne.addEventListener('click', function(){
    inputSomething('1');
});

let inputTwo = numberButtons[1];
inputTwo.addEventListener('click', function(){
    inputSomething('2');
});

let inputThree = numberButtons[2];
inputThree.addEventListener('click', function(){
    inputSomething('3');
});

let inputFour = numberButtons[3];
inputFour.addEventListener('click', function(){
    inputSomething('4');
});

let inputFive = numberButtons[4];
inputFive.addEventListener('click', function(){
    inputSomething('5');
});

let inputSix = numberButtons[5];
inputSix.addEventListener('click', function(){
    inputSomething('6');
});

let inputSeven = numberButtons[6];
inputSeven.addEventListener('click', function(){
    inputSomething('7');
});

let inputEight = numberButtons[7];
inputEight.addEventListener('click', function(){
    inputSomething('8');
});

let inputNine = numberButtons[8];
inputNine.addEventListener('click', function(){
    inputSomething('9');
});

let inputZero = numberButtons[10];
inputZero.addEventListener('click', function(){
    inputSomething('0');
});

let inputPlus = operatorButtons[0];
inputPlus.addEventListener('click', function(){
    inputSomething(' + ');
});

let inputMinus = operatorButtons[1];
inputMinus.addEventListener('click', function(){
    inputSomething(' - ');
});

let inputMultiply = operatorButtons[2];
inputMultiply.addEventListener('click', function(){
    inputSomething(' * ');
});

let inputDivide = operatorButtons[3];
inputDivide.addEventListener('click', function(){
    inputSomething(' / ');
});

let backSpaceButton = numberButtons[11];
backSpaceButton.addEventListener('click', function(){
    erase();
});

let clearButton = numberButtons[9];
clearButton.addEventListener('click', function(){
    clear();
})

let inputEquals = operatorButtons[4];
inputEquals.addEventListener('click', function(){
let calcArray = calcInput.split(" ");
console.log(calcArray);
let calcResult = calculateArray(calcArray);
console.log(calcResult);
calcInput = calcResult;
displayContent.textContent = calcInput;
calcInput = '';
});
