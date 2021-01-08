// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getAddSum, getSubSum, getDivSum, getMulSum } from '../utils.js';

const addTest = QUnit.test;

addTest('you should see 12 displayed when inputing 8 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAddSum(8, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



const subTest = QUnit.test;

subTest('someone should see 269 after inputing 312 and 43', (expect) => {
    const subExpected = 269;

    const subActual = getSubSum(312, 43);

    expect.equal(subActual, subExpected);

});


const divTest = QUnit.test;

divTest('if one does not see 45.25 after inputing 543 and 12 then something is seriously off', (expect) => {
    const divExpected = 45.25;

    const divActual = getDivSum(543, 12);

    expect.equal(divActual, divExpected);
});



const mulTest = QUnit.test;

mulTest('if you dont see 82329214097412 after multiplying 94353426 by 872562 then it takes longer than that to teach a monkey how to kickflip', (expect) => {
    const mulExpected = 82329214097412;

    const mulActual = getMulSum(94353426, 872562);

    expect.equal(mulActual, mulExpected);
});

