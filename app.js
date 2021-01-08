// Addition Section
import { myClickHandler } from './handlers.js';


const button1 = document.getElementById('button');

button1.addEventListener('click', myClickHandler);



//Subtraction Section
import { myClickHandlerSub } from './handlers.js';

const subButton1 = document.getElementById('sub-button');

subButton1.addEventListener('click', myClickHandlerSub);



//Division Section
import { myClickHandlerDiv } from './handlers.js';

const divButton = document.getElementById('divbutton');

divButton.addEventListener('click', myClickHandlerDiv);



//Multiplication section
import { myClickHandlerMul } from './handlers.js';

const mulButton1 = document.getElementById('mulbutton');

mulButton1.addEventListener('click', myClickHandlerMul);





// button.addEventListener('click', () => {
//     const firstValue = firstInput.valueAsNumber;
//     const secondValue = secondInput.valueAsNumber;

//     const result = firstValue + secondValue;
    
//     additionResult.textContent = result;
    
// });

// //Division Section

// const divInput1 = document.getElementById('divinput1');
// const divInput2 = document.getElementById('divinput2');
// const divResult = document.getElementById('divResults');
// const divButton1 = document.getElementById('divbutton');

// divButton1.addEventListener('click', () => {
//     const divValue1 = divInput1.valueAsNumber;
//     const divValue2 = divInput2.valueAsNumber;

//     const divSum = divValue1 / divValue2;

//     divResult.textContent = divSum;
// });


// //Subtraction Section

// const subInput1 = document.getElementById('sub-input1');
// const subinput2 = document.getElementById('sub-input2');
// const subResults = document.getElementById('subResults');
// const subButton = document.getElementById('sub-button');

// subButton.addEventListener('click', () => {
//     const subValue1 = subInput1.valueAsNumber;
//     const subValue2 = subinput2.valueAsNumber;

//     const subSum = subValue1 - subValue2;

//     subResults.textContent = subSum;
// });


// //Multiplication Section

// const mulInput1 = document.getElementById('mul-input1');
// const mulInput2 = document.getElementById('mul-input2');
// const mulResults = document.getElementById('mulResults');
// const mulButton1 = document.getElementById('mulbutton');

// mulButton1.addEventListener('click', () => {
//     const mulValue1 = mulInput1.valueAsNumber;
//     const mulValue2 = mulInput2.valueAsNumber;

//     const mulSum = mulValue1 * mulValue2;

//     mulResults.textContent = mulSum;
// });