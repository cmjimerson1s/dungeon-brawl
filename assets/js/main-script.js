const acRate = 16;
const acRateGoblin = 8;

document.getElementById('dice-roll-attk').addEventListener('click', function() {
    if (parseInt(document.getElementById("round-count").innerText) %2 == 0 ) {
        fighterAttack();
    } else {
        enemyAttack();
    }    
})



function fighterAttack() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let warriorRoll = document.getElementById('warrior-dice-value').textContent = num1;
        if(warriorRoll >= acRateGoblin) {
            let num2 = Math.floor(Math.random() * 12) + 1;
            document.getElementById('warrior-dmg-value').textContent = num2;
            fighterRoundResult();
            let roundDmg = document.getElementById('enemy-health-value').innerHTML;
            setTimeout(() => alert('You hit! You did ' +num2+ ' damage! The goblin only has ' +roundDmg+ ' health left!'), 500);
            roundUp();
        } else {
            setTimeout(() => alert('You missed! Now it is the enemies turn!'), 500);
            roundUp();
        }
}

function enemyAttack() {
    let num4 = Math.floor(Math.random() * 20) + 1;
    let goblinRoll = document.getElementById('enemy-attk-roll').textContent = num4;
        if(goblinRoll >= acRate) {
            let num3 = Math.floor(Math.random() * 10) + 1;
            document.getElementById('enemy-hit-value').textContent = num3;
            goblinRoundResult();
            let goblinRoundDmg = document.getElementById('warrior-health-amount').innerHTML;
            setTimeout(() => alert('You were hit! The goblin did ' +num3+ ' damage! You only have ' +goblinRoundDmg+ ' health left!'), 500);
            roundUp();
        }
}

function fighterRoundResult() {

    let roundDmg = (Math.max(0, ((parseInt(document.getElementById('enemy-health-value').innerText)) - (parseInt(document.getElementById('warrior-dmg-value').innerText)))));
    document.getElementById('enemy-health-value').innerHTML = roundDmg;
}

function goblinRoundResult() {
    let goblinRoundDmg = (Math.max(0, ((parseInt(document.getElementById('warrior-health-amount').innerText)) - (parseInt(document.getElementById('enemy-hit-value').innerText)))));
    document.getElementById('warrior-health-amount').innerHTML = goblinRoundDmg;
}

function roundUp () {
    let oldRound = parseInt(document.getElementById('round-count').innerText);
    document.getElementById('round-count').innerText = ++oldRound;
}