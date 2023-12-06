
let zodiacQuestion = parseInt(prompt("What year were you born in?"));

let formula = (zodiacQuestion - 4) % 12;

if (formula >= 11) {

  alert("You are a Pig!");
  
} else if (formula >= 10) {

  alert("You are a Dog!");

} else if (formula >= 9) {

  alert("You are a Rooster!")

} else if (formula >= 8) {

    alert("You are a Monkey!")

} else if (formula >= 7) {

    alert("You are a Goat!")

} else if (formula >= 6) {

    alert("You are a Horse!")

} else if (formula >= 5) {

    alert(" You are a Snake!")

} else if (formula >= 4) {

    alert("You are a Dragon!")

} else if (formula >= 3) {

    alert("You are a Rabbit!")

} else if (formula >= 2) {

    alert("You are a Tiger!")

} else if (formula >= 1) {

    alert("You are an Ox!")

} else if (formula >= 0) {

    alert("You are a Rat!")

}
