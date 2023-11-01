let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
  name: "Acay",
  chips: 1500
}
let playerEl = document.getElementById("player-el")
playerEl.innerText = player.name + " $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1

  if (randomCard === 1) {
    randomCard = 11
  } else if (randomCard > 10) {
    randomCard = 10
  }
  return randomCard
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  document.getElementById("btn-startGame").textContent = 'NEW GAME'
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack :)"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
  cardsEl.textContent = "Cards: " + cards
  sumEl.textContent = "Sum: " + sum 
}

function newCard() {
  if (hasBlackJack) {
    messageEl.textContent = "You won. Let's start new game :)"
  } else if (isAlive) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  } else {
    messageEl.textContent = 'You cannot do that now. Start new game.'
  }
}
