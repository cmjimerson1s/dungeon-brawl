const acRate = 16;
const acRateGoblin = 8;
let round = parseInt(document.getElementById('round-count').innerText);

document.addEventListener('DOMContentLoaded', gameStart);

document.getElementById('dice-roll-attk').addEventListener('click', fighterAttack);

function gameStart () {
    let round = 0;
}

function fighterAttack() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let warriorRoll = document.getElementById('warrior-dice-value').textContent = num1;
        if(warriorRoll >= acRateGoblin) {
            let num2 = Math.floor(Math.random() * 12) + 1;
            document.getElementById('warrior-dmg-value').textContent = num2;
            fighterRoundResult();
            let roundDmg = document.getElementById('enemy-health-value').innerHTML
            setTimeout(() => alert('You hit! You did ' +num2+ ' damage! The goblin only has ' +roundDmg+ ' health left!'), 500);
            roundUp();
        } else {
            setTimeout(() => alert('You missed! Now it is the enemies turn!'), 500);
            roundUp();
            enemyAttack();
        }
}

function enemyAttack() {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let goblinRoll = document.getElementById('enemy-attk-roll').textContent = num1;
        if(goblinRoll >= acRate) {
            let num3 = Math.floor(Math.random() * 6) + 1;
            document.getElementById('enemy-hit-value').textContent = num3;
        }
}

function fighterRoundResult() {

    let roundDmg = (Math.max(0, ((parseInt(document.getElementById('enemy-health-value').innerText)) - (parseInt(document.getElementById('warrior-dmg-value').innerText)))));
    document.getElementById('enemy-health-value').innerHTML = roundDmg;
}

function goblinRoundResult() {

}

function roundUp () {
    document.getElementById('round-count').innerText = ++round;
}