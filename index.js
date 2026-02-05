let score1 = 0
let score2 = 0
let target = Math.floor(Math.random() * 50) + 50
let scoreTurn = 0
let playerNow = `player ${Math.floor(Math.random() * 2) + 1}`

function diceRoll() {
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    document.querySelector("#dices").textContent = `Dices: ${dice1} + ${dice2}.`
    if (dice1 === dice2) scoreTurn = 0
    else scoreTurn += (dice1 + dice2)
    document.querySelector("#scoreTurn").textContent = `Score Turn =  ${scoreTurn}.`
    chking()
}

function pass() {
    if (playerNow === "player1") {
        playerNow = "player2"
        score1 += scoreTurn
        document.querySelector("#score1").textContent = score1
    }
    else {
        playerNow = "player1"
        score2 += scoreTurn
        document.querySelector("#score2").textContent = score2
    }
    document.querySelector("#nowTurn").textContent = `Now it's the turn of: ${playerNow}`
    scoreTurn = 0
    chking()
}

function chking() {
    if (score1 >= target) {
        document.querySelector("#winner").textContent = `Our winner is Player 1`
        document.querySelector(".button").style.display = "none"
    }
    if (score2 >= target) {
        document.querySelector("#winner").textContent = `Our winner is Player 2`
        document.querySelector(".button").style.display = "none"
    }
}

function startGame() {
    chking()
    diceRoll(playerNow)
}

document.querySelector("#maxScore").textContent = `The max score is: ${target}`
document.querySelector("#nowTurn").textContent = `Now it's the turn of: ${playerNow}`