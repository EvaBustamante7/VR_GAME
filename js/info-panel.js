/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      karigurashiButton: {
        title: 'Duck Hunt',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'Duck Hunt , consigue la maxima puntuacion abatiendo todos los patos que puedas para ser el mejor cazador del lago.  El cazador  se encontrara con muchos desafios. Los patos de diferentes colores avanzan por el lago, deberas hundirlos para conseguir la maxima puntuacion. No debes olvidar que te esperan sorpresas escondidas entre las setas, eliminalas para obtener puntos extras.\n GOOD HUNT'
      },
      kazetachinuButton: {
        title: 'Save Games',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'Zori    2300\n Sol      3400\n Franci     3400\nJuanan      3400\n Eva      3400',

      },
      ponyoButton: {
        title: 'Top Hunters',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'Franci    340.000\n Sol      50000',
      }

    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);

  },

  onBackgroundClick: function (evt) {
    if (this.movieImageEl && this.movieImageEl.id === 'karigurashiMovieImage') {
      window.location.href = 'game.html';
    } else {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  }
});