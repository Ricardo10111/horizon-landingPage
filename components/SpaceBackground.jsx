'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function SpaceBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    let frameId
    const width = window.innerWidth
    const height = window.innerHeight
    const scene = new THREE.Scene()

    // Cargar imagen como fondo
    const loader = new THREE.TextureLoader()
    loader.load('/espacio.png', (texture) => {
      scene.background = texture
    })

    // === CAPA 1: Estrellas ===
    const starCount = 20000
    const starPositions = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)

    const colorOptions = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xfff6d9),
      new THREE.Color(0xb0c4ff),
      new THREE.Color(0xffd1dc),
    ]

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 10000
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 10000
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10000

      const color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)]
      starColors[i * 3] = color.r
      starColors[i * 3 + 1] = color.g
      starColors[i * 3 + 2] = color.b
    }

    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3),
    )
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3))

    const starMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 1,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // === CAPA 2: Cometas ===
    const cometCount = 50
    const comets = []
    const cometGeometry = new THREE.SphereGeometry(2, 8, 8)
    const cometMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

    for (let i = 0; i < cometCount; i++) {
      const comet = new THREE.Mesh(cometGeometry, cometMaterial.clone())
      comet.position.set(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        -Math.random() * 5000,
      )
      comet.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          Math.random() * 2 + 0.5,
        ),
      }
      scene.add(comet)
      comets.push(comet)
    }

    // Cámara
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 20000)
    camera.position.z = 1500

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Animación
    const animate = () => {
      stars.rotation.y += 0.0002

      camera.position.z -= 0.5
      if (camera.position.z < -5000) {
        camera.position.z = 1500
      }

      comets.forEach((comet) => {
        comet.position.add(comet.userData.velocity)
        if (comet.position.z > camera.position.z) {
          comet.position.set(
            (Math.random() - 0.5) * 2000,
            (Math.random() - 0.5) * 2000,
            -5000,
          )
        }
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      mountRef.current.removeChild(renderer.domElement)
      starGeometry.dispose()
      starMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  )
}
