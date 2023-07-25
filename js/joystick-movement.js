AFRAME.registerComponent('joystick-movement', {
    schema: {
      speed: { default: 0.1 }, // Velocidad de movimiento
    },
  
    init: function () {
      this.onThumbstickMoved = this.onThumbstickMoved.bind(this);
      this.thumbstickPressed = false;
  
      // Añade los eventos 'thumbstickmoved' y 'thumbstickdown' al componente de oculus-touch-controls
      var oculusControlsEl = document.querySelector('[oculus-touch-controls]');
      if (oculusControlsEl) {
        oculusControlsEl.addEventListener('thumbstickmoved', this.onThumbstickMoved);
        oculusControlsEl.addEventListener('thumbstickdown', () => (this.thumbstickPressed = true));
        oculusControlsEl.addEventListener('thumbstickup', () => (this.thumbstickPressed = false));
      }
    },
  
    remove: function () {
      // Limpia los eventos al remover el componente
      var oculusControlsEl = document.querySelector('[oculus-touch-controls]');
      if (oculusControlsEl) {
        oculusControlsEl.removeEventListener('thumbstickmoved', this.onThumbstickMoved);
        oculusControlsEl.removeEventListener('thumbstickdown', () => (this.thumbstickPressed = true));
        oculusControlsEl.removeEventListener('thumbstickup', () => (this.thumbstickPressed = false));
      }
    },
  
    onThumbstickMoved: function (evt) {
      if (this.thumbstickPressed) {
        // Obtiene los valores de movimiento del joystick
        var x = evt.detail.x;
        var y = evt.detail.y;
  
        // Obtiene la dirección de la cámara
        var camera = document.querySelector('a-camera');
        var cameraDirection = camera.object3D.getWorldDirection(new THREE.Vector3());
        var cameraRotation = Math.atan2(cameraDirection.x, cameraDirection.z);
  
        // Calcula el nuevo desplazamiento de la cámara
        var moveX = x * Math.cos(cameraRotation) - y * Math.sin(cameraRotation);
        var moveZ = x * Math.sin(cameraRotation) + y * Math.cos(cameraRotation);
  
        // Aplica el desplazamiento a la posición de la cámara
        camera.object3D.position.x += moveX * this.data.speed;
        camera.object3D.position.z += moveZ * this.data.speed;
      }
    },
  });
  