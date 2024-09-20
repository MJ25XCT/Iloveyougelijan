document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('myAudio');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const musicPlayer = document.getElementById('musicPlayer');
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const disk = document.getElementById('disk');

    // New elements for progress bar
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

    let currentTrack = 0;
    let playlist = [];

    window.initializeMusicPlayer = function() {
        playlist = document.querySelectorAll('#playlist audio');
        console.log('Playlist loaded:', playlist);
        loadTrack(0);
    }

    function loadTrack(trackIndex) {
        if (trackIndex >= 0 && trackIndex < playlist.length) {
            currentTrack = trackIndex;
            const track = playlist[currentTrack];
            audioElement.src = track.src;
            
            // Split the title into artist and song title
            const fullTitle = track.dataset.title;
            const splitIndex = fullTitle.indexOf('-');
            if (splitIndex !== -1) {
                artistName.textContent = fullTitle.substring(0, splitIndex).trim();
                songTitle.textContent = fullTitle.substring(splitIndex + 1).trim();
            } else {
                // If there's no hyphen, just use the full title as the song title
                songTitle.textContent = fullTitle;
                artistName.textContent = 'Unknown Artist';
            }

            audioElement.play().catch(e => {
                console.error(`Error playing track: ${fullTitle}`, e);
            });
            playBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
            disk.style.animationPlayState = 'running';
        }
    }

    function togglePlay() {
        if (audioElement.paused) {
            audioElement.play();
            playBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
            disk.style.animationPlayState = 'running';
        } else {
            audioElement.pause();
            playBtn.innerHTML = '&#9658;'; // Play symbol
            disk.style.animationPlayState = 'paused';
        }
    }

    playBtn.addEventListener('click', togglePlay);

    prevBtn.addEventListener('click', function() {
        loadTrack((currentTrack - 1 + playlist.length) % playlist.length);
    });

    nextBtn.addEventListener('click', function() {
        loadTrack((currentTrack + 1) % playlist.length);
    });

    function showMusicPlayer() {
        const musicPlayer = document.getElementById('musicPlayer');
        musicPlayer.style.display = 'flex'; // Show the music player
        setTimeout(() => {
            musicPlayer.style.opacity = '1'; // Fade in
        }, 50);
    }

    window.play = function() {
        showTimeline(); // Show the timeline
        showMusicPlayer(); // Show the music player
        initializeMusicPlayer(); // Initialize the music player
        audioElement.play(); // Play the song automatically after the player shows up
    }

    audioElement.addEventListener('ended', function() {
        loadTrack((currentTrack + 1) % playlist.length); // Play next song when current one ends
    });

    audioElement.addEventListener('play', function() {
        showMusicPlayer();
    });

    // Original progress bar logic
    progressContainer.addEventListener('click', setProgress);
    audioElement.addEventListener('timeupdate', updateProgress);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function updateProgress() {
        if (audioElement.duration) {
            const percent = (audioElement.currentTime / audioElement.duration) * 100;
            progressBar.style.width = `${percent}%`;
            currentTime.textContent = formatTime(audioElement.currentTime);
            duration.textContent = formatTime(audioElement.duration);
        }
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioElement.duration;
        audioElement.currentTime = (clickX / width) * duration;
    }
});
