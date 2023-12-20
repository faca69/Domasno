

let numbersArray = [5, 10, 15, 20, 25];
let list = document.getElementById('numberList');
let sum = 0;


for (let i = 0; i < numbersArray.length; i++) {
  let number = numbersArray[i];

  
  let listItem = document.createElement('li');
  listItem.textContent = number;
  list.appendChild(listItem);

  
  
  sum += number;
}


document.getElementById('sum').textContent = 'Sum: ' + sum;