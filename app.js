var scores, roundScore, activePlayer, gamePlaying;

init();

//starts a new game
function init() {
    //initially set all score variable to 0
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;

    //initially set all score to 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    //hide the dice initially
    document.querySelector('.dice').style.display = "none";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

//switches the player
function nextPlayer() {

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

//dice roll button action
document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
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
            // //next player
            nextPlayer();

        }
    }

});

//adds local score to global score
document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        //update global score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game
        if (scores[activePlayer] >=100) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';

            var winnerDOM =document.querySelector('.player-' + activePlayer + '-panel');
            winnerDOM.classList.add('winner');
            winnerDOM.classList.remove('active');

            document.querySelector('.dice').style.display = "none";
            gamePlaying = false;
        }
        else {
            //next player
            nextPlayer();
        }
    }

});

//starts a new game
document.querySelector('.btn-new').addEventListener('click', init);