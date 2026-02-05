let score1 = 0
let score2 = 0
let turn
let target = Math.floor(Math.random() * 50) + 50
let scoreTurn = 0
let playerNow = `player${Math.floor(Math.random() * 2) + 1}`

function diceRoll(player) {
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    console.log(`Dices: ${dice1} + ${dice2}, player ${player}`)
    document.querySelector("#dices").textContent = `Dices: ${dice1} + ${dice2}.`
    if (dice1 === dice2) {
        scoreTurn = 0
    }
    else {
        scoreTurn += (dice1 + dice2)
    }
}

function turnGame(player) {
    diceRoll(player)

}

function pass() {
    if (playerNow === "player1") {
        playerNow = "player2"
        score1 += scoreTurn
        document.querySelector("#score1").textContent = `Score Player 1 = ${score1}`
    }
    else {
        playerNow = "player1"
        score2 += scoreTurn
        document.querySelector("#score2").textContent = `Score Player 1 = ${score2}`
    }
    document.querySelector("#nowTurn").textContent = `Now it's the turn of: ${playerNow}`
    scoreTurn = 0
}

function startGame() {
    if (score1 >= target) {
        document.querySelector("#score1").textContent = `Score Player 1 = ${score1} ← is the winner.`
        document.querySelector(".button").style.display = "none"
    }
    if (score2 >= target) {
        document.querySelector("#score2").textContent = `Score Player 2 = ${score2} ← is the winner.`
        document.querySelector(".button").style.display = "none"
    }
    turnGame(playerNow)
}

document.querySelector("#maxScore").textContent = `The max score is: ${target}`
document.querySelector("#nowTurn").textContent = `Now it's the turn of: ${playerNow}`