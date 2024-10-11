let current_score_HOME = 0;
let current_score_AWAY = 0;

const scorenumH = document.getElementById("scorenumH");
const scorenumA = document.getElementById("scorenumA");
const winner = document.getElementById("team");
const leader = document.getElementById("leading");

// Function to add points based on team and points value
function addPoints(team, points) {
    if (team === 'home') {
        current_score_HOME += points;
        scorenumH.textContent = current_score_HOME;
    } else {
        current_score_AWAY += points;
        scorenumA.textContent = current_score_AWAY;
    }
}

// Reset both scores and UI elements
function reset() {
    current_score_HOME = 0;
    current_score_AWAY = 0;
    scorenumH.textContent = current_score_HOME;
    scorenumA.textContent = current_score_AWAY;
    winner.textContent = "- - - - - - -";
    leader.textContent = "- - - - - - -";
}

// Display the winner based on scores
function win() {
    if (current_score_HOME === 0 && current_score_AWAY === 0) {
        winner.textContent = "New Match";
    } else if (current_score_HOME > current_score_AWAY) {
        winner.textContent = "HOME Team";
    } else if (current_score_HOME === current_score_AWAY) {
        winner.textContent = "Game Draw";
    } else {
        winner.textContent = "AWAY Team";
    }
}

// Display the leading team
function findlead() {
    if (current_score_HOME === 0 && current_score_AWAY === 0) {
        leader.textContent = "- - - - - - - -";
    } else if (current_score_HOME > current_score_AWAY) {
        leader.textContent = "HOME Team";
    } else if (current_score_HOME === current_score_AWAY) {
        leader.textContent = "Game Draw";
    } else {
        leader.textContent = "AWAY Team";
    }
}
