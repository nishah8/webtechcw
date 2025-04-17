document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('music');
    const muteButton = document.getElementById('mute-button');

    // Handle mute button
    if (muteButton && music) {
        function updateMuteIcon() {
            muteButton.textContent = music.muted ? '🔇' : '🔊';
        }
        muteButton.addEventListener('click', () => {
            music.muted = !music.muted;
            updateMuteIcon();
        });
        updateMuteIcon();
    }

    // Handle audio loop
    if (music) {
        music.addEventListener('ended', () => {
            music.currentTime = 0;
            music.play(); // Optional: Auto-restart playback
        });
    }
});

