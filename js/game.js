var count = 0; //-- used in collide-detect component


//-- add to the oculus touch controller html --
AFRAME.registerComponent('trigger-check', {
  //dependencies: ['raycaster'],

  init: function () {
       
    var debugtxt = document.querySelector('a-text');
   
    //-- trigger button pressed
    this.el.addEventListener('triggerdown', function (e) {
        
        controllershoot();
        console.log('estoy en el tocuh controller')
    });
  },
  
  
});

//-- add this to any element you want to remove on collision --
//-- put class="target" to your targets
AFRAME.registerComponent('collide-detect', {
  init: function () {
    var bulletEl = this.el;
   
    var debugtxt = document.querySelector('a-text');
    
    this.el.addEventListener('collide', function (e) {
      if (e.detail.body.el.className === 'target') {
        try {
          let puntuacion = 0;
          const targetId = e.detail.body.el.id;
           if (targetId === 'bueno') {
            puntuacion = 100;
          } else if (targetId === 'malo') {
            puntuacion = 500;
          } else {
            puntuacion = 200;
          }
           e.detail.body.el.parentNode.removeChild(e.detail.body.el);
          
           // Sumar la puntuación a la puntuación total guardada en el localStorage
          let puntuacionTotal = parseInt(localStorage.getItem('puntuacionJugador')) || 0;
          puntuacionTotal += puntuacion;
          debugtxt.setAttribute('value', 'Puntuacion: ' + puntuacionTotal);
          localStorage.setItem('puntuacionJugador', puntuacionTotal);
           console.log('Estoy en collide-detect - colisión if');
        } catch (err) {}
      }
       try {
        bulletEl.parentNode.removeChild(e.detail.target.el);
      } catch (err) {}
    });
  },
  
  
});
