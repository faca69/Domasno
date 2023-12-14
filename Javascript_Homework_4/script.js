// HW1

// let arrayForStory = ["Emilija", "happy", "playing computer games"];

// function tellStory(someArray) {

//   if (typeof someArray === "string") {

//     alert(
//       `This is ${arrayForStory[0]}. ${arrayForStory[0]} is a nice person. Today she is ${arrayForStory[1]}. She has been ${arrayForStory[2]} all day. The End.`

//     );

//   }

// }

// console.log(tellStory(arrayForStory[(0, 1, 2)]));











// HW1.2

// function tellStory([name, mood, activity]) {

//     let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

//     return story;
// }

// let story = tellStory(['Emilija', 'happy', 'playing on the computer']);

// alert(story);












// HW2


// function arraySum([num1, num2, num3, num4, num5]) {

// return num1 + num2 + num3 + num4 + num5;


// }

// alert(arraySum([10, 20, 30, 40, 30]))




// HW2 BONUS

// let arr = [10, 11, 12, 'abc', 14];

// function validateNumber(someArray) {

// if ( typeof(someArray) === 'number') {

// alert('The numbers are valid')


// } else {

//     alert('ERROR')
// }

// }

// console.log(validateNumber(arr));




// HW3

// function combineStringsFromArray(arr) {
    
  
//     let combinedString = arr.join(' ');
  
//     return combinedString;
//   }
  
  
//   let stringsArray = ["Hello", "there", "students", "of", "SEDC", "!"];
//   let result = combineStringsFromArray(stringsArray);
//   console.log(result); 








// HW4 


// for (let i = 1; i < 21; i++) {

// if(i % 2 === 1) {

// console.log(i);

// } else {

// console.log(i + '\n ');

// }


// }





// HW5

// function sumMaxMin(arr) {

  
//     let maxNumber = arr[0];
//     let minNumber = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxNumber) {
//         maxNumber = arr[i];
//       }
//       if (arr[i] < minNumber) {
//         minNumber = arr[i];
//       }
//     }
  



//     let sum = maxNumber + minNumber;
  
//     return {
//       Max: maxNumber,
//       Min: minNumber,
//       Sum: sum
//     };
//   }
  
  
//  let numbersArray = [10, 1, 99, 55, 62];
//  let result = sumMaxMin(numbersArray);
//   console.log(`Max: ${result.Max}, Min: ${result.Min}, Sum: ${result.Sum}`);



// HW6



// function fullNamesExercise(firstNames, lastNames) {
    
//     let fullNameArray = [ ];
    
//     for (let i = 0; i < firstNames.length; i++) {
//       let fullName = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
//       fullNameArray.push(fullName);
//     }
  
//     return fullNameArray;
//   }
  
  
//   let first = ["Peter", "Joe", 'Brian'];
//   let last = ["Griffin", "Peterson", 'Swanson'];
//   let fullNames = fullNamesExercise(first, last);
//   console.log(fullNames);
 
  
