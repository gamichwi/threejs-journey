import './style.css';
import * as THREE from 'three';

//Canvas
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// Objects
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const redCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(redCube);

const greenCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
greenCube.position.x = -2;
group.add(greenCube);

const blueCube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
blueCube.position.x = 2;
group.add(blueCube);

// Axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// redCube.position.x = 0.7;
// redCube.position.y = -0.6;
// redCube.position.z = 1;
mesh.position.set(0.7, -0.6, 1);
// scene.add(mesh);
mesh.position.normalize(); //Take the vector length and reduce it so it is 1
// console.log(`Length of the redCube ${mesh.position.length()}`);

// Scale
// redCube.scale.x = 2;
// redCube.scale.y = 0.5;
// redCube.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);

// Rotation
mesh.rotation.reorder('YXZ'); //Use this when one of the axis locks (gimbal lock)
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
mesh.rotation.z = 0;

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// camera.lookAt(new THREE.Vector3(3, 0, 0));
// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// console.log(`distance from the redCube to the camera ${mesh.position.distanceTo(camera.position)}`);
