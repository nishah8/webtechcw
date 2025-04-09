const hamburger = document.getElementById('hamburgerI');
const menu = document.getElementById('menu');

// Add a click event listener to toggle visibility
hamburger.addEventListener('click', function () {
    menu.classList.toggle('hidden'); 
    menu.classList.toggle('show'); 
});
