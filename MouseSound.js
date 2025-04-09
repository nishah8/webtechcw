document.body.addEventListener('mousemove', () => {
    const MouseSound = document.getElementById('music');
    if (MouseSound) {
        MouseSound.play();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const MouseSound = document.getElementById('music');
    if (MouseSound) {
        MouseSound.addEventListener('ended', () => {
            MouseSound.currentTime = 0;
        });
    }
});