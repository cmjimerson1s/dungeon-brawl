
    
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "warrior-roll") {
            let num1 = Math.floor(Math.random() * 20) + 1;
            document.getElementById("warrior-dice-value").textContent = num1;
        } else {
            alert("Not that button!")
        }
})
}


let round = document.getElementById("round-count").textContent;