
// function calcDogAge(dogAge) {
//     return dogAge * 7;
//   }
  
  
//   function calcHumAge(humanAge) {
//     return humanAge / 7;
//   }
  
//   let dogAgeInput = prompt("Vnesi gi godinite vo kuceski godini:");
//   if (dogAgeInput !== null) {
//     let dogAge = parseFloat(dogAgeInput);
//     let dogAgeInHumanYears = calcDogAge(dogAge);
//     console.log(`Kuceski vo covecki: ${dogAgeInHumanYears}`);
//   }
  
  
//   let humanAgeInput = prompt("Vnesi gi godinite vo covecki godini:");
//   if (humanAgeInput !== null) {
//     let humanAge = parseFloat(humanAgeInput);
//     let humanAgeInDogYears = calcHumAge(humanAge);
//     console.log(`Covecki vo kuceski: ${humanAgeInDogYears}`);
//   }



////////////////////////////////////////////////////////////////////



// typeof

// function checkType(input) {


//     let type = typeof input;

//     console.log(`Type of ${input} is: ${type}`);
// }

// checkType(null)
// checkType(false)
// checkType(55)
// checkType("Hello")
// checkType()





/////////////////////////////////////////////////////////////////




// ATM

// let accountBalance = 1000; 

// function withdrawCash(amount) {
//     if (amount > accountBalance) {
//         return "Nemate dovolno pari";
//     } else {
//         accountBalance -= amount;
//         return `Pari izvadeni: ${amount}, Vi ostanuvaat: ${accountBalance}`;
//     }
// }


// function ATMTransaction() {
//     let userInput = prompt("Vnesete ja sumata na kolku shto sakate da izvadite:");

//     if (userInput === null || userInput === "") {
//         alert("Transakcijata e odbiena ili invalid input");
//     } else {
//         let amountToWithdraw = parseFloat(userInput);
//         let result = withdrawCash(amountToWithdraw);

//         alert(result);
//     }
// }

// ATMTransaction();
