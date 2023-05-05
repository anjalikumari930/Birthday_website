const gif = document.getElementById("gif");
const header=document.getElementById("header");
function playSong() {
    var song = document.getElementById("song");
    var playButton = document.getElementById("play-button");
    if (song.paused) {
      song.play();
      header.style.display="none";
      gif.style.display = "block";
      playButton.innerHTML = "Pause";
    } else {
      song.pause();
      header.style.display="block";
      playButton.innerHTML = "Play";
      gif.style.display = "none";
    }
  }
  