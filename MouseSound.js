const music = document.getElementById('music');
const muteButton = document.getElementById('mute-button');

if (muteButton && music) {
    function updateMuteIcon() {
        muteButton.textContent = music.muted ? '🔇' : '🔊';
        }
        
    muteButton.addEventListener('click', () => {
        music.muted = !music.muted;
        updateMuteIcon();
            
        if (!music.muted && music.paused) {
            music.play();
            }
        });
        
    updateMuteIcon();
    }

if (music) {
    music.addEventListener('ended', () => {
        music.currentTime = 0;
        music.play();
        });
    };

document.body.addEventListener('mousemove', () => {
    const music = document.getElementById('music');
    if (music && !music.muted && music.paused) {
        music.play();
    }
});
