const images = document.getElementsByClassName("hoverImage");

for (let i = 0; i < images.length; i++) { //loops through all images then if the condition is meet for a specific image then 
    images[i].addEventListener("mouseover", function() {
        images[i].style.transform = "scale(1.2)"; // Increase size by 20%
    });

    images[i].addEventListener("mouseout", function() {
        images[i].style.transform = "scale(1)"; // Reset size
    });
}


const buttons = document.getElementsByClassName("choicebuttons");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", function() {
        buttons[i].style.backgroundColor = "blue"
        buttons[i].style.transform = "scale(1.2)"; // Change color on hover
    });

    buttons[i].addEventListener("mouseout", function() {
        buttons[i].style.backgroundColor = "red"
        buttons[i].style.transform = "scale(1)"; // Reset to original color
    });
}



const bottombuttons = document.getElementsByClassName("gameoverbuttons");

for (let i = 0; i < bottombuttons.length; i++) {
    bottombuttons[i].addEventListener("mouseover", function() {
        bottombuttons[i].style.backgroundColor = "blue"
        bottombuttons[i].style.transform = "scale(1.2)"; // Change color on hover
    });

    bottombuttons[i].addEventListener("mouseout", function() {
        bottombuttons[i].style.backgroundColor = "red"
        bottombuttons[i].style.transform = "scale(1)"; // Reset to original color
    });
}