let scoreHome = document.getElementById("home-score")
let scoreGuest = document.getElementById("guest-score")
homeScore = 0
guestScore = 0

function plusOneHome() {
    homeScore += 1
    scoreHome.textContent = homeScore
}

function plusTwoHome() {
    homeScore += 2
    scoreHome.textContent = homeScore
}

function plusThreeHome() {
    homeScore += 3
    scoreHome.textContent = homeScore
}

function plusOneGuest() {
    guestScore += 1
    scoreGuest.textContent =guestScore
}

function plusTwoGuest() {
    guestScore += 2
    scoreGuest.textContent =guestScore
}

function plusThreeGuest() {
    guestScore += 3
    scoreGuest.textContent =guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    scoreHome.textContent = homeScore
    scoreGuest.textContent = guestScore
}