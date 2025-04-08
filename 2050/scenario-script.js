// Toggle hamburger menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  // Toggle the 'show' class on the navLinks to display or hide the dropdown
  navLinks.classList.toggle("show");
});

// 1) Retrieve and display the last clicked decision
function retrieveLastDecision() {
  const lastDecision = localStorage.getItem('lastDecision');
  if (lastDecision) {
    document.querySelector('.previous-choice').textContent = `Previous Choice: ${lastDecision}`;
  }
}

// 2) Attach event listeners for the choice buttons
const choice1Btn = document.getElementById("choice1Btn");
const choice2Btn = document.getElementById("choice2Btn");

choice1Btn.addEventListener("click", () => {
  alert("You chose Choice 1!");
  // CHANGED: Store updated decision for dead-end and redirect to the dead-end page in the child folder
  localStorage.setItem('lastDecision', '2050 - Virtual Revolution: Choice 1 Dead End');
  window.location.href = "2050-deadend.1/2050-deadend.1.html";
});

choice2Btn.addEventListener("click", () => {
  alert("You chose Choice 2!");
  // CHANGED: Store updated decision for survived and redirect to the survived page in the child folder
  localStorage.setItem('lastDecision', '2050 - Virtual Revolution: Choice 2 Survived');
  window.location.href = "2050-survived.1/2050-survived.1.html";
});

// 3) Option A: Call retrieveLastDecision() once the DOM is loaded
document.addEventListener('DOMContentLoaded', retrieveLastDecision);

