//Handler Imports
import { addClickHandler, subClickHandler, divClickHandler, mulClickHandler } from './handlers.js';



// Addition Section
const button1 = document.getElementById('button');

button1.addEventListener('click', addClickHandler);



//Subtraction Section
const subButton1 = document.getElementById('sub-button');

subButton1.addEventListener('click', subClickHandler);



//Division Section
const divButton = document.getElementById('divbutton');

divButton.addEventListener('click', divClickHandler);



//Multiplication section
const mulButton1 = document.getElementById('mulbutton');

mulButton1.addEventListener('click', mulClickHandler);





