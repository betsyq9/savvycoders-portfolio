var computerChoice
var computerChooses = function () {

    var randomNumber = Math.random()

    if (randomNumber <= .32) {
        computerChoice = 'rock'
    } else if (randomNumber <= .65) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    console.log(computerChoice)
}

var game = function () {

var userChoice = prompt("Please choose rock, paper, or scissors.")

computerChooses()

if (computerChoice === userChoice) {
  alert("You tied!")
} else {
  if (userChoice === 'rock') {
      if (computerChoice === "scissor") {
        alert("You win!")
      } else if (computerChoice === 'paper'){
        alert("You lose!")
      } else {
        alert("You didn't follow the rules")
      }

  } else if (userChoice === 'paper') {
    if (computerChoice === "rock") {
      alert("You win!")
    } else if (computerChoice === 'scissors'){
      alert("You lose!")
    } else {
      alert("You didn't follow the rules")
    }

  } else if (userChoice === "scissors"){
      alert("You win!")
    } else if (computerChoice === "paper") {
      alert("You lose!")
    } else {
      alert("You didn't follow the rules")
    }
}
}

var round = 1;

while (round <= 5) {
    $("body").append(round)
    game()
    round++
}
