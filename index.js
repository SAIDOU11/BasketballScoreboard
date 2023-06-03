let score = 0;
let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");

homeScore.textContent = score;
guestScore.textContent = score;

function plusOneHome() {
  score += 1;
  homeScore.textContent = score;
}
function plusTwoHome() {
  score += 2;
  homeScore.textContent = score;
}
function plusThreeHome() {
  score += 3;
  homeScore.textContent = score;
}

function plusOneGuest() {
  score += 1;
  guestScore.textContent = score;
}
function plusTwoGuest() {
  score += 2;
  guestScore.textContent = score;
}
function plusThreeGuest() {
  score += 3;
  guestScore.textContent = score;
}
