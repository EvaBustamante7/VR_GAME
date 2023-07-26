// music.js
var musicPlaying = true; // Variable para controlar si la música está reproduciéndose o no

function toggleMusica() {
  var playButton = document.getElementById('playButton');
  var pauseButton = document.getElementById('pauseButton');
  var musica = document.getElementById('mi-musica');

  if (musicPlaying) {
    musica.play(); // Inicia la reproducción de la música
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
  } else {
    musica.pause(); // Pausa la reproducción de la música
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
  }

  musicPlaying = !musicPlaying; // Cambia el estado de la música (reproduciéndose o pausada)
}



