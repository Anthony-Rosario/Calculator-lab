//Function Imports
import { getAddSum, getSubSum, getDivSum, getMulSum } from './utils.js';


//Addition portion
const firstInput = document.getElementById('input1');
const secondInput = document.getElementById('input2');
const additionResult = document.getElementById('addResults');

export function addClickHandler() {
    const inputValue1 = firstInput.valueAsNumber;
    const inputValue2 = secondInput.valueAsNumber;

    const sum = getAddSum(inputValue1, inputValue2);

    additionResult.textContent = sum;
}



//Subtraction section
const subInput1 = document.getElementById('sub-input1');
const subinput2 = document.getElementById('sub-input2');
const subResults = document.getElementById('subResults');

export function subClickHandler() {
    const subInputValue1 = subInput1.valueAsNumber;
    const subInputValue2 = subinput2.valueAsNumber;

    const sum = getSubSum(subInputValue1, subInputValue2);

    subResults.textContent = sum;
}




//Division portion
const divInput1 = document.getElementById('divinput1');
const divInput2 = document.getElementById('divinput2');
const divResult = document.getElementById('divResults');

export function divClickHandler() {
    const divInputVal1 = divInput1.valueAsNumber;
    const divInputVal2 = divInput2.valueAsNumber;
    
    const sum = getDivSum(divInputVal1, divInputVal2);

    divResult.textContent = sum;
}



//Multiplication portion
const mulInput1 = document.getElementById('mul-input1');
const mulInput2 = document.getElementById('mul-input2');
const mulResults = document.getElementById('mulResults');

export function mulClickHandler() {
    const mulInputVal1 = mulInput1.valueAsNumber;
    const mulInputVal2 = mulInput2.valueAsNumber;

    const sum = getMulSum(mulInputVal1, mulInputVal2);

    mulResults.textContent = sum;
}
