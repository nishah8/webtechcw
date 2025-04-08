/* hamburger menu */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* Retrieve and display the last clicked decision */
function retrieveLastDecision() {
  const lastDecision = localStorage.getItem('lastDecision');
  if (lastDecision) {
    document.querySelector('.previous-choice').textContent = `Previous Choice: ${lastDecision}`;
  }
}

/* Choice Buttons */
const choice1Btn = document.getElementById("choice1Btn");
const choice2Btn = document.getElementById("choice2Btn");

choice1Btn.addEventListener("click", () => {
  alert("You chose Choice 1!");
  
  localStorage.setItem('lastDecision', '2050 - Virtual Revolution: Choice 1 Dead End');
  window.location.href = "2050-deadend.1/2050-deadend.1.html";
});

choice2Btn.addEventListener("click", () => {
  alert("You chose Choice 2!");
  
  localStorage.setItem('lastDecision', '2050 - Virtual Revolution: Choice 2 Survived');
  window.location.href = "2050-survived.1/2050-survived.1.html";
});

document.addEventListener('DOMContentLoaded', retrieveLastDecision);

