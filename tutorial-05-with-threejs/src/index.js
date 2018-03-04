import * as THREE from 'three'

window.addEventListener('DOMContentLoaded', () => {

  const VIEWPORT_W = window.innerWidth
  const VIEWPORT_H = window.innerHeight

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(VIEWPORT_W, VIEWPORT_H)
  renderer.setPixelRatio(window.devicePixelRatio)

  document.body.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, VIEWPORT_W / VIEWPORT_H, 1, 1000)
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshPhongMaterial({ color: 0x00ffcc })
  const box = new THREE.Mesh(geometry, material)
  box.position.z = -5
  scene.add(box)

  const light = new THREE.DirectionalLight(0xffffff)
  light.position.set(1, 1, 1)
  scene.add(light)

  const tick = () => {
    requestAnimationFrame(tick)

    box.rotation.x += 0.005
    box.rotation.y += 0.005

    renderer.render(scene, camera)
  }

  tick()
})
