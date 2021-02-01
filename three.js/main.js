// alert("a");
import * as THREE from "three";

// let camera, scene, renderer;
// let geometry, material, mesh;

// init();
// // animate();

export default class Sketch {
  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.addMesh();

    this.time = 0;

    this.render();
  }

  addMesh() {
    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }
  render() {
    this.time++;
    console.log(this.time);
    window.requestAnimationFrame(this.render.bind);
  }
}

new Sketch();

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

function animation(time) {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
}
