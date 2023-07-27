const duckProperties = [
  { position: "-3 1.606 -3", rotation: "0 0 0" },
  { position: "-2.141 1.549 1.640", rotation: "0 0 0" },
  { position: "3.271 1.549 -5.248", rotation: "0 0.001 0" },
  { position: "3.314 1.549 2.306", rotation: "0 3.770 0" },
  { position: "1.668 1.549 6.332", rotation: "0 3.225 0" },
  { position: "3.271 1.549 -5.248", rotation: "0 0.001 0" },
  { position: "-6.650 1.549 5.424", rotation: "0 4.068 0" },
  { position: "0.988 1.549 1.761", rotation: "0 -2.610 0" },
  { position: "2.8 1.549 11.440", rotation: "0 -18.684 0" },
  { position: "-4.080 1.549 13.372", rotation: "0 5.267 0" },
  { position: "-8.705 1.549 8.780", rotation: "0 8.774 0" },
  { position: "0.280 1.549 8.142", rotation: "0 -3.445 0" },
  { position: "1.182 1.549 11.956", rotation: "0 12.857 0" },
  { position: "9.717 18.884 14.118", rotation: "0 0 0" },
  { position: "11.648 2.501 8.228", rotation: "0 0 0" },
  { position: "4.588 4.292 1.285", rotation: "0 0.001 0" },
  { position: "10.727 17.214 7.098", rotation: "0 3.770 0" },
  { position: "13.545 19.031 11.976", rotation: "0 3.225 0" },
  { position: "17.985 19.793 17.05", rotation: "0 0.001 0" },
  { position: "15.999 2.194 3.731", rotation: "0 4.068 0" },
  { position: "3.012 3.825 19.761", rotation: "0 -2.610 0" },
  { position: "8.187 7.454 11.397", rotation: "0 -18.684 0" },
  { position: "18.771 10.862 4.579", rotation: "0 5.267 0" },
  { position: "4.989 1.539 14.918", rotation: "0 8.774 0" },
  { position: "11.296 13.222 1.7", rotation: "0 -3.445 0" },
  { position: "9.486 15.051 16.326", rotation: "0 12.857 0" },
  { position: "-7.354 -3.328 -3.651", rotation: "0 0.001 0" },
  { position: "1-7.962 -1.905 0.352", rotation: "0 3.770 0" },
  { position: "-2.893 -0.746 0.169", rotation: "0 3.225 0" },
  { position: "-1.218 -2.242 -9.309", rotation: "0 0.001 0" },
  { position: "-1.218 -2.242 -9.309", rotation: "0 4.068 0" },
  { position: "-4.911 -0.529 0.666", rotation: "0 -2.610 0" },
  { position: "-7.415 -3.161 -3.601", rotation: "0 -18.684 0" },
  { position: "-5.064 -6.14 1.261", rotation: "0 5.267 0" },
  { position: "-9.495 0.336 -0.106", rotation: "0 8.774 0" },
  { position: "-9.497 -5.177 -5.419", rotation: "0 -3.445 0" },
  { position: "-2.455 -1.925 -2.195", rotation: "0 12.857 0" },
];

duckProperties.forEach(properties => {
  const entity = document.createElement("a-entity");
  entity.classList.add("target");
  entity.setAttribute("dynamic-body", "shape: box");
  entity.setAttribute("position", properties.position);
  entity.setAttribute("rotation", properties.rotation);
  entity.setAttribute("scale", "5 5 5");
  entity.setAttribute("gltf-model", "https://cdn.glitch.global/37023834-35df-4743-a92b-2913cca3bdc9/free_rubber_duck_3d_model.glb?v=1690194354620");
  document.querySelector("a-scene").appendChild(entity);
});