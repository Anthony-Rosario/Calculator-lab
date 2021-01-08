// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getAddSum, getSubSum, getDivSum, getMulSum } from '../utils.js';



//Addition Tests
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

addTest('someone should expect to see -166 after they input -123 and -43', (expect) => {
    const expected = -166;

    const actual = getAddSum(-123, -43);

    expect.equal(actual, expected);
});




//Subtraction Tests
const subTest = QUnit.test;

subTest('someone should see 269 after inputing 312 and 43', (expect) => {
    const subExpected = 269;

    const subActual = getSubSum(312, 43);

    expect.equal(subActual, subExpected);

});

subTest('when inputing 75 and 824 one should see -749', (expect) => {
    const subExpected = -749;

    const subActual = getSubSum(75, 824);

    expect.equal(subActual, subExpected);
});



//Division tests
const divTest = QUnit.test;

divTest('if one does not see 45.25 after inputing 543 and 12 then something is seriously off', (expect) => {
    const divExpected = 45.25;

    const divActual = getDivSum(543, 12);

    expect.equal(divActual, divExpected);
});

divTest('you should see -16 when someone gets fancy and inputs -32 and 2', (expect) => {
    const divExpected = -16;

    const divActual = getDivSum(-32, 2);

    expect.equal(divActual, divExpected);
});




//Multiplication Tests
const mulTest = QUnit.test;

mulTest('if you dont see 82329214097412 after multiplying 94353426 by 872562 then it takes longer than that to teach a monkey how to kickflip', (expect) => {
    const mulExpected = 82329214097412;

    const mulActual = getMulSum(94353426, 872562);

    expect.equal(mulActual, mulExpected);
});

mulTest('if someone is seeing double and decided to input -90 and 90 one should see -8100', (expect) => {
    const mulExpected = -8100;

    const mulActual = getMulSum(-90, 90);

    expect.equal(mulActual, mulExpected);
});
