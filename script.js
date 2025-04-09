// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Add a click event listener to toggle the menu visibility
hamburger.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    menu.classList.toggle('show'); 
});
