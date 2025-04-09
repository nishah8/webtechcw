/* Hamburger Menu */
const hamburgerI = document.getElementById("hamburgerI");
const menu = document.getElementById("menu");

if (hamburgerI && menu) {
  hamburgerI.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

/* Retrieve and display the last clicked decision */
function retrieveLastDecision() {
  const lastDecision = localStorage.getItem("lastDecision");
  if (lastDecision) {
    const elem = document.querySelector(".previous-choice");
    if (elem) {
      elem.textContent = `Previous Choice: ${lastDecision}`;
    }
  }
}

document.addEventListener("DOMContentLoaded", retrieveLastDecision);

/* Choice Buttons */
const choice1Btn = document.getElementById("choice1Btn");
const choice2Btn = document.getElementById("choice2Btn");

if (choice1Btn) {
  choice1Btn.addEventListener("click", () => {
    alert("You chose Choice 1!");
    localStorage.setItem("lastDecision", "2050 - Virtual Revolution: Choice 1 Dead End");
    window.location.href = "2050-deadend.1/2050-deadend.1.html";
  });
}

if (choice2Btn) {
  choice2Btn.addEventListener("click", () => {
    alert("You chose Choice 2!");
    localStorage.setItem("lastDecision", "2050 - Virtual Revolution: Choice 2 Survived");
    window.location.href = "2050-survived.1/2050-survived.1.html";
  });
}
