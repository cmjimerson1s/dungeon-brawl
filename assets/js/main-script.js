
document.addEventListener("DOMContentLoaded", function() {
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let num1 = Math.floor(Math.random() * 20) + 1;
            document.getElementById("warrior-dice-value").textContent = num1;
})
}
})