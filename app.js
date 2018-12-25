var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//initially set all score to 0
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

//hide the dice initially
document.querySelector('.dice').style.display = "none";

//dice roll button action
document.querySelector('.btn-roll').addEventListener('click', function() {

    //generate random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //update the dice image
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = "block";

    //update the round score only IF it is NOT 1
    if (dice !== 1) {
        //add the score
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        //toggle active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //hide the dice
        document.querySelector('.dice').style.display = 'none';

    }

});