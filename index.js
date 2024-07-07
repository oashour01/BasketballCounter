// Home Counter
let homeScoreEl = document.getElementById("home-score-digit");
let homeScoreBtnOne = document.getElementById("home-btn-1");
let homeScoreBtnTwo = document.getElementById("home-btn-2");
let homeScoreBtnThree = document.getElementById("home-btn-3");
let homeScore = 0;

function homeAddOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

// Guest Counter
let guestScoreEl = document.getElementById("guest-score-digit");
let guestScoreBtnOne = document.getElementById("guest-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-btn-2");
let guestScoreBtnThree = document.getElementById("guest-btn-3");
let guestScore = 0;

function guestAddOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function guestAddThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

// Clear Score
let resetBtn = document.getElementById("reset-score");

function reset() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
}
