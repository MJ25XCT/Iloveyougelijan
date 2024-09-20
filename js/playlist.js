const playlist = [
  {"title": "Valley - Oh shit are we in love", "src": "./music/Valley%20-%20Oh%20shit%20are%20we%20in%20love.flac"},
  {"title": "Troye Sivan - Wait", "src": "./music/Troye_Sivan_Wait.flac"},
  {"title": "Troye Sivan - Trouble", "src": "./music/Troye%20Sivan%20-%20Trouble.flac"},
  {"title": "Troye Sivan - Got Me Started", "src": "./music/Troye%20Sivan%20-%20Got%20Me%20Started.flac"},
  {"title": "The Ridleys - Aphrodite", "src": "./music/The%20Ridleys%20-%20Aphrodite.mp3"},
  {"title": "The Paper Kites - By My Side", "src": "./music/The%20Paper%20Kites%20-%20By%20My%20Side.flac"},
  {"title": "The 1975 - Oh Caroline", "src": "./music/The%201975%20-%20Oh%20Caroline.mp3"},
  {"title": "Taylor John Williams - The Mates of Soul", "src": "./music/Taylor%20John%20Williams%20-%20The%20Mates%20of%20Soul%20(Remastered).flac"},
  {"title": "Sixpence None the Richer - Kiss Me", "src": "./music/Sixpence%20None%20the%20Richer%20-%20Kiss%20Me.flac"},
  {"title": "Shawn Mendes - Why", "src": "./music/Shawn%20Mendes%20-%20Why.flac"},
  {"title": "Shawn Mendes - Lost In Japan", "src": "./music/Shawn%20Mendes%20-%20Lost%20In%20Japan.flac"},
  {"title": "Shawn Mendes - Fallin All In You", "src": "./music/Shawn_Mendes_Fallin_All_In_You.mp3"},
  {"title": "Owl City - My Muse", "src": "./music/Owl%20City%20-%20My%20Muse.flac"},
  {"title": "Over October - Intertwine", "src": "./music/Over%20October%20-%20Intertwine.mp3"},
  {"title": "Over October - Ating Dalawa", "src": "./music/Over%20October%20-%20Ating%20Dalawa.flac"},
  {"title": "Noah Kahan - Forever", "src": "./music/Noah%20Kahan%20-%20Forever.flac"},
  {"title": "New West - This Little Story", "src": "./music/New%20West%20-%20This%20Little%20Story.flac"},
  {"title": "Liang Lawrence - (not) a love song", "src": "./music/Liang%20Lawrence%20-%20(not)%20a%20love%20song.flac"},
  {"title": "Landon Pigg - Falling in Love at a Coffee Shop", "src": "./music/Landon%20Pigg%20-%20Falling%20in%20Love%20at%20a%20Coffee%20Shop.mp3"},
  {"title": "Kris Allen - It's Always You", "src": "./music/Kris_Allen_It's_Always_You.flac"},
  {"title": "Kris Allen - Better with You", "src": "./music/Kris_Allen_Better_with_You.flac"},
  {"title": "Fly by Midnight - Infinitely Falling", "src": "./music/Fly%20by%20Midnight%20-%20Infinitely%20Falling%20(Romantic%20Redraw).flac"},
  {"title": "Cup of Joe - Lahat Ng Bukas", "src": "./music/Cup%20of%20Joe%20-%20Lahat%20Ng%20Bukas.flac"},
  {"title": "Bread - If", "src": "./music/Bread%20-%20If.flac"},
  {"title": "Aly AJ - Slow Dancing", "src": "./music/Aly_AJ_Slow_Dancing.flac"}
];

// Dynamically add the playlist to the HTML
document.addEventListener('DOMContentLoaded', () => {
  const playlistContainer = document.getElementById('playlist');
  playlist.forEach(track => {
    const audioElement = document.createElement('audio');
    audioElement.dataset.title = track.title;
    audioElement.src = track.src;
    playlistContainer.appendChild(audioElement);
  });

  // Remove the initializeMusicPlayer call from here
  console.log('Playlist loaded:', playlist);
});
