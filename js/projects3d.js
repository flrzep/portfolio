---
layout: null
---


import * as THREE from 'three';

//v3


/*
// CUBE
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, loader, currentModel, container, directionalLight, ambientLight;

let models = [
    '01_macropad.glb',
    '02_putter.glb',
    '03_3010-air-duct-mk2.glb',
    '04_hebel_pumpgerät.glb'
]; // Define model in a higher scope


let model_scale = [4, 4, 0.01, 0.01]
var modelNr = 0;


function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(
        5, // FOV
        window.innerWidth / window.innerHeight, // Aspect ratio
        .1, // Near plane
        100 // Far plane
    );
    
    camera.position.set(0, 5.5, 10);
    camera.rotation.x = -.5;

    // Ambient Light
    ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Directional Light
    directionalLight = new THREE.DirectionalLight(0xffffff, 5.0);
    directionalLight.position.set(0, 1, 3);
    scene.add(directionalLight);

    //renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer = new THREE.WebGLRenderer({ antialias: true});

    scene.background = new THREE.Color(0xaaaaaa);

    // Optionally set the renderer size based on the container's dimensions
    container = document.getElementById('threejs-viewport');
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    updateCamera();

    loader = new GLTFLoader();
    loadModel("{{ '/assets/models/cad/01_macropad.glb' | relative_url }}"); // Load initial model

    animate();
}


// Handle window resize
window.addEventListener('resize', () => {
    updateCamera();
});


function updateCamera() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}


function loadModel(modelPath, n) {
    if (currentModel) {
        scene.remove(currentModel); // Remove old model
    }

    loader.load(modelPath, (gltf) => {
        currentModel = gltf.scene;
        scene.add(currentModel);
        
        currentModel.position.set(0, 0, 0);
        currentModel.scale.set(model_scale[n], model_scale[n], model_scale[n]);

    });
}

// Button forward
document.getElementById("changeFwd").addEventListener("click", () => {
   modelNr += 1;
    changeModel();
});

// Button backward
document.getElementById("changeBwd").addEventListener("click", () => {
    modelNr -= 1;
    changeModel();
});


function changeModel() {
    
    if (modelNr >= models.length ) {
        modelNr = 0;    
    } else if (modelNr < 0) {
        modelNr = models.length;
    }

    console.log(modelNr);

    let newModelPath = {{ site.baseurl }} + 'assets/models/cad/' + models[modelNr]

    console.log(newModelPath);

    loadModel(newModelPath, modelNr);
}


function animate() {
    requestAnimationFrame(animate);
    if (currentModel) currentModel.rotation.y += 0.01; // Rotate model for effect
    renderer.render(scene, camera);
}


init();
