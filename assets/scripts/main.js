const card = document.getElementsByClassName("card");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function () {
        let button = document.getElementById(`button-${i+1}`);
        button.classList.add("bg-gold");
    });
    card[i].addEventListener("mouseout", function () {
        let button = document.getElementById(`button-${i + 1}`);
        button.classList.remove("bg-gold");
    });
    
}


