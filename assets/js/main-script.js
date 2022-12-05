
document.addEventListener("DOMContentLoaded", function() {
    if (parseInt(document.getElementById("round-count").innerText) %2 == 0 ) {
        figtherAttack();
    } else {
        alert("False");
    }
}
)

function figtherAttack() {    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "warrior-roll") {
                let num1 = Math.floor(Math.random() * 20) + 1;
                document.getElementById("warrior-dice-value").textContent = num1;
        } else {
            alert("You must attack before you deal damage!");
        }
})
}
}

/**
 * Increases the value of the round counter by one after the player and enemy have a turn
 */
function increaseRoundNumber() {

    let round = parseInt(document.getElementById("round-count").innerText);
    document.getElementById("round-count").innerText = ++round;

}