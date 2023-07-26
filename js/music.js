// music.js
function toggleMusica() {
  var musicEntity = document.querySelector('a-entity[sound]');
  if (musicEntity.components.sound.isPlaying) {
    musicEntity.components.sound.pause();
  } else {
    musicEntity.components.sound.play();
  }
}


