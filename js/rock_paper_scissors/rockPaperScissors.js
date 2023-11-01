
let hands = ['rock', 'paper', 'scissors']

var userHand = prompt("What's your hand?")
let computerHand = hands[Math.floor(Math.random() * 3)]

document.getElementById("userHand").innerText = "User: " + userHand
document.getElementById("computerHand").innerText = "Computer: " + computerHand

if (userHand === computerHand) {
  console.log("DRAW!")
  document.getElementById("result").innerText = 'DRAW!'
} else if (userHand === 'rock' && computerHand === 'paper') {
  console.log("You lost!")
  document.getElementById("result").innerText = 'LOST!'
} else if (userHand === 'rock' && computerHand === 'scissors') {
  console.log("You won!")
  document.getElementById("result").innerText = 'WON!'
} else if (userHand === 'paper' && computerHand === 'rock') {
  console.log("You won!")
  document.getElementById("result").innerText = 'WON!'
} else if (userHand === 'paper' && computerHand === 'scissors') {
  console.log("You lost!")
  document.getElementById("result").innerText = 'LOST!'
} else if (userHand === 'scissors' && computerHand === 'rock') {
  console.log("You lost!")
  document.getElementById("result").innerText = 'LOST!'
} else if (userHand === 'scissors' && computerHand === 'paper') {
  console.log("You won!")
  document.getElementById("result").innerText = 'WON'
} else {
  document.getElementById("result").innerText = 'siema'
}
