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
        let fighterRoundDmg = document.getElementById('warrior-dmg-value').textContent = num2;
        roundResult();
        let roundDmg = document.getElementById('enemy-health-value').innerHTML
        setTimeout(() => alert('You hit! You did ' +num2+ ' damage! The goblin only has ' +roundDmg+ ' health left!'), 500);
    }
}

function roundResult ( ) {

    let roundDmg = (Math.max(0, ((parseInt(document.getElementById('enemy-health-value').innerText)) - (parseInt(document.getElementById('warrior-dmg-value').innerText)))));
    document.getElementById('enemy-health-value').innerHTML = roundDmg;
}