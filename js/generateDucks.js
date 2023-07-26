window.addEventListener('load', initScene)
let puntuacion;
let username="pepe";
 const meteors = [
  { x: 0, y: 0, z: -30 },
  { x: 0, y: 0, z: 30 },
  { x: 30, y: 0, z: 0 },
  { x: -30, y: 0, z: 0 },
  { x: 20, y: 0, z: 20 },
  { x: 20, y: 0, z: -20 },
  { x: -20, y: 0, z: -20 },
  { x: -20, y: 0, z: 20 }
]
let score = 0;
 function initScene() {
  let orbits = document.querySelectorAll('.orbit')
   orbits.forEach(orbit => {
    meteors.forEach(pos => {
      let meteor = document.createElement('a-entity')
      meteor.setAttribute('geometry', { primitive: 'sphere', radius: Math.random() * 3 + 0.5 })
      meteor.setAttribute('material', { shader: 'flat', src: '#meteor' })
      meteor.setAttribute('class', 'meteor')
      meteor.setAttribute('factorpuntuacion', 10)
      meteor.object3D.position.set(pos.x, pos.y, pos.z)
      meteor.setAttribute('shootable', '')
      orbit.appendChild(meteor)
    })
  })
}