var sceneEl = document.querySelector("a-scene");
var cameraEl = document.getElementById("camera");
var controllerEl = document.getElementById("rtcontroller");
//document.getElementById('patito').setAttribute('factorpuntuacion',10)
//-- used by keyboard shoot --
const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = cameraEl.getAttribute("position");
  bullet.setAttribute("position", pos);
  //bullet.setAttribute("velocity", getDirection(cameraEl, 30));
  let  direction = new THREE.Vector3();
  cameraEl.object3D.getWorldDirection( direction );
  bullet.setAttribute("velocity", direction.multiplyScalar(-20));
  bullet.setAttribute("dynamic-body", {shape: 'box', mass: 1});
  bullet.setAttribute("radius", 0.2);
  bullet.setAttribute("collide-detect", null);

  // Obtiene la entidad de sonido del área de activos
  const soundEntity = document.querySelector("#disparo");

  // Agrega el atributo 'sound' a la entidad de la bala
  bullet.setAttribute("sound", {src: soundEntity.getAttribute("src"), autoplay: true});

  // Revisa colisiones de la bala
  bullet.addEventListener("collide", function(event) {
    const target = event.detail.body.el;
    if (target.id === "patito") {
      target.parentNode.removeChild(target);
    }
    sceneEl.removeChild(bullet);
  });

  sceneEl.appendChild(bullet);
};

//-- keyboard shoot --
document.onkeydown = (event) => {
  //-- keycode for space bar --
  if (event.which == 32) {
    shoot();
  }
};

//-- oculus touch controller shoot --
const controllershoot = () => {
  const bullet = document.createElement("a-sphere");
  //let pos = cameraEl.getAttribute("position");

  
  
  
  
};