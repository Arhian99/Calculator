let clear = document.getElementById('clear');
let zero = document.getElementById('zero');
let equal = document.getElementById('equal');
let screenText = document.getElementById('screen-text');

let numberA;
let numberB;
let operator;

let numbers = document.getElementsByClassName('numbers'); //recall this is an array//node list 
let operators = document.getElementsByClassName('operator');

//math functions
function add(numberA, numberB) {
    return (+numberA + +numberB).toFixed(5);
}

function subtract(numberA, numberB) {
    return (+numberA - +numberB).toFixed(5);
}

function multiply(numberA, numberB) {
    return (+numberA * +numberB).toFixed(5);
}

function divide(numberA, numberB) {
    return (+numberA / +numberB).toFixed(5);
}


//operate function

function operate(numberA, operator, numberB) {
    if (operator === '+') {return add(numberA, numberB)}
    else if (operator == '-') {return subtract(numberA, numberB)}
    else if (operator == '*') {return multiply(numberA, numberB)}
    else if (operator == '/') return divide(numberA, numberB)
}

/*fix the fact that the operator must be in string form (in quotations)
for this to work and must be separated by commas */

//screen population functions

// changes the text on the screen
//screenText.innerHTML(number.textContent());

// adds event listener to each number so that upon click its value will be logged on the screen

/*
function eventListeners(numbers) {
    () => numbers.forEach(number => {
        number.addEventListener('click', number => screenText.innerHTML(number.textContent()))
    })
}

eventListeners(numbers);
*/

/*
function handler(event) {
    let text = [];
    text.push(event.target.textContent);
    let onScreen = text.join('');
    screenText.innerHTML = onScreen;
}
*/

let onScreenA = ''; //stores the value on the screen (to be transferred to NumberA after operator is pressed or NumberB after equal is pressed)
let num = [];
let typed = '';

for (number of numbers) {
    number.addEventListener('click', event => {
        onScreenA += event.target.textContent;
        screenText.innerHTML = onScreenA;        

        typed += event.target.textContent;
    })
};

for (operator of operators) {
    operator.addEventListener('click', event => {

        if (num[0] == undefined) {
            onScreenA += event.target.textContent;
            screenText.innerHTML = onScreenA;     

            num.push(typed);
            typed = '';
            num.push(event.target.textContent);
        }

        else {
            onScreenA += event.target.textContent;
            screenText.innerHTML = onScreenA;

            if (typed !== '') {num.push(typed)};
            typed = '';
            num.push(event.target.textContent);
        }
/*
        if (num[0] == undefined) {
            num[0] = typed;
            num[1] = event.target.textContent; //sets the operator
            typed = '';
        }
*/
    }) 
}


equal.addEventListener('click', event => {
    num.push(typed);
    typed = '';

    numberA = num[0];
    operator = num[1];
    numberB = num[2];
    num.splice(0, 3);
    num.unshift(operate(numberA, operator, numberB));

    if (num.length != 1) {
        do {
            numberA = num[0];
            operator = num[1];
            numberB = num[2];
            num.splice(0, 3);
            num.unshift(operate(numberA, operator, numberB));
        }
        while (num.length !== 1)
    }
    
    onScreenA = num[0];
    screenText.innerHTML = onScreenA;
    typed = '';
})


clear.addEventListener('click', event => {
    onScreenA = '';
    screenText.innerHTML = onScreenA;
    typed = '';
    num = [];
})

/*
for (operator of operators) {
    operator.addEventListener('click', event => {
        for (let i = 0; i <= num.length; i =+ 2) {
            if (num[i] ==  undefined) {
                num[i] = onScreenA;
                num[i + 1] = event.target.textContent;
                textA.push(event.target.textContent);
                onScreenA = textA.join('');
                screenText.innerHTML = onScreenA;
                textA = [];
            }
        }
        
        

    })
}

*/


/*
numberA = onScreenA;
operator = event.target.textContent;
screenText.innerText = `${operator}`;
*/

/* event => screenText.innerHTML = event.target.textContent
event => text.push(event.target.textContent)*/


