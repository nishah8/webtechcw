const music = document.getElementById('music');
const muteButton = document.getElementById('mute-button');

    // Initialize mute button
if (muteButton && music) {
    function updateMuteIcon() {
        muteButton.textContent = music.muted ? '🔇' : '🔊';
        }
        
    muteButton.addEventListener('click', () => {
        music.muted = !music.muted;
        updateMuteIcon();
            
            // If unmuted, play audio (if paused)
        if (!music.muted && music.paused) {
            music.play().catch(e => console.log("Play error:", e));
            }
        });
        
    updateMuteIcon();
    }

    // Audio loop logic
if (music) {
    music.addEventListener('ended', () => {
        music.currentTime = 0;
        music.play();
        });
    };

document.body.addEventListener('mousemove', () => {
    const music = document.getElementById('music');
    if (music && !music.muted && music.paused) {
        music.play().catch(e => console.log("Autoplay blocked:", e));
    }
});
