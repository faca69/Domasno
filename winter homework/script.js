
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");

const displayValElement = document.getElementById("display__numbers");

const btnNumbers = document.getElementsByClassName("btn--number");

const btnOperators = document.getElementsByClassName("btn--operator");


let displayVal = '0';
let pendingVal;  
let evalStringArray = []; 
  

updateDisplayVal = (e) => {
    let btnText = e.target.innerText;
    if(displayVal === "0") { 
      displayVal = ""; 
    }

  
    displayVal += btnText; 
    displayValElement.innerText = displayVal;
} 



performOperation = (e) => {
  let operator = e.target.innerText;  
  
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
         
            displayVal = evaluation + ''; 
            console.log(typeof displayVal);
            displayValElement.innerText = displayVal;
            evalStringArray = []; 
            break;
        default:
            break;
    }
}

for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal) 
}

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', performOperation);
}


clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}


decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}

