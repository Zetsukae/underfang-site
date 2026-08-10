const video = document.getElementById('controls');
const btn = document.getElementById('playPauseBtn');

function togglePlay() {
    if (video.paused) {
        video.play();
        btn.textContent = "⏸";
        btn.style.opacity = "0.9";
    } else {
        video.pause();
        btn.textContent = "▶";
        btn.style.opacity = "1";
    }
}

btn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
