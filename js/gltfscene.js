import * as THREE from 'three';

// Create Scene
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0xaaaaaa);

// Create Camera
const camera = new THREE.PerspectiveCamera(
  50, // FOV
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near plane
  1000 // Far plane
);
camera.position.set(0, .5, 8);

// Create Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Optionally set the renderer size based on the container's dimensions
const container = document.getElementById('threejs-viewport');
renderer.setSize(container.clientWidth, container.clientHeight);

// Append the renderer's canvas to your container
container.appendChild(renderer.domElement);


// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

/*
// CUBE
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let model; // Define model in a higher scope

// Load the model
const loader = new GLTFLoader();
loader.load(
  '/assets/models/fr.glb', // Adjust path to your model file
  (gltf) => {
    // Assign the loaded model to the global variable
    model = gltf.scene;
    scene.add(model);

    // Optional: Adjust model position, scale, or rotation if needed
    model.position.set(0, 0, 0);
    model.scale.set(4, 4, 4);
  },
  (xhr) => {
    // Called while loading is progressing
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    // Called when loading has errors
    console.error('An error happened', error);
  }
);

// You can now access and modify `model` elsewhere in your code



function animate() {
    requestAnimationFrame(animate);
    // Optional: Rotate the scene or model for effect
    model.rotation.y += .05;
    //scene.rotation.y += 0.05; 
    renderer.render(scene, camera);
  }

animate();
  

