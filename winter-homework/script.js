const allBtns = document.querySelectorAll('.btn');
const prevValue = document.querySelector('.prev-value');
const displayValue = document.querySelector('.display-values');
const numbersBtns = document.querySelectorAll('.number');
const operationalBtns = document.querySelectorAll('.operational');
const backSpace = document.getElementById('delete');
const clean = document.getElementById('clean');
const equals = document.getElementById('equals');
const spans = document.querySelectorAll('span');
const divs = document.querySelectorAll('div');
const paragraphs = document.querySelectorAll('p');

let firstNumber;
let secondNumber;
let operator;



numbersBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', ()=> {

        if((numBtn.innerText == '.') && displayValue.innerText.includes('.')) return;
        else if(displayValue.innerText.length > 9) return;

        else if(!operator){
            displayValue.innerText += numBtn.innerText;
            firstNumber = displayValue.innerText;
        }
        else if(operator){
            displayValue.innerText += numBtn.innerText;
            secondNumber = displayValue.innerText;
        }
    })
});

window.addEventListener('keydown', (e)=> {
    if(e.key >= 0 && e.key <= 9 && !operator || e.key == '.'){
        if((e.key == '.') && displayValue.innerText.includes('.')) return;
        else if(displayValue.innerText.length > 9) return;
        displayValue.innerText += e.key;
        firstNumber = displayValue.innerText;
    }
    else if(e.key >= 0 && e.key <= 9 && operator || e.key == '.'){
        displayValue.innerText += e.key;
        secondNumber = displayValue.innerText;
    }
    else if (e.key == '=' || e.key == 'Enter'){
        displayResult();
    }
    else if(e.key == 'Backspace'){
        displayValue.innerText = displayValue.innerText.slice(0, -1);
        firstNumber = displayValue.innerText;
    }
    else if(e.key == 'Tab'){
        e.preventDefault();
        darkBrightMode();
    }
    else if(e.key == 'c'){
        displayValue.innerText = '';
        prevValue.innerText = '';
        removeSelectedClass()
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
    }
});

operationalBtns.forEach(optBtn => {
    window.addEventListener('keydown',(e) => {
        if(e.key == optBtn.innerText){
            displayResult();
            operator = e.key;
            prevValue.innerText = `${firstNumber}${operator}`
            displayValue.innerText = ''
            removeSelectedClass();
            optBtn.classList.add('selected');
        }
    });
    optBtn.addEventListener('click', () => {
        displayResult();
        operator = optBtn.innerText;
        prevValue.innerText = `${firstNumber}${operator}`
        displayValue.innerText = ''
        removeSelectedClass();
        optBtn.classList.add('selected');
    });

});

function displayResult(){
    if(firstNumber !== undefined && secondNumber !== undefined && operator !== undefined){
        displayValue.innerText = operate(Number(firstNumber), Number(secondNumber), operator);
        if(displayValue.innerText.length > 9) displayValue.innerText = displayValue.innerText.slice(0,9);
        prevValue.innerText = `${firstNumber}${operator}${secondNumber}`;
        removeSelectedClass();
        firstNumber = displayValue.innerText;
        secondNumber = undefined;
        operator = undefined;
    }
    return;
}

function operate (number1, number2, operator) {
if(operator == '+'){
    return number1 + number2;
}
else if (operator == '-'){
    return number1 - number2;
}
else if (operator == '*'){
    return number1 * number2;
}
else if (operator == '/'){
    if (number2 == '0') return 'Bruh' 
    return number1 / number2;
}
}

clearCalc();

function clearCalc(){
    clean.addEventListener('click', ()=> {
        displayValue.innerText = '';
        prevValue.innerText = '';
        removeSelectedClass()
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
    });
}

deleteBackspace();

function deleteBackspace(){
    backSpace.addEventListener('click', () => {
        displayValue.innerText = displayValue.innerText.slice(0, -1);
        firstNumber = displayValue.innerText;
    });
}

function removeSelectedClass(){
    operationalBtns.forEach(optBtn => (
        optBtn.classList.remove('selected')
    ));
}

equals.addEventListener('click', () => {
    displayResult();
})

