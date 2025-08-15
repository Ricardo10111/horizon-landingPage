'use client'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function SpaceBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    let raf
    const mount = mountRef.current
    const scene = new THREE.Scene()

    // Cámara + renderer
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 20000)
    camera.position.z = 1500

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearAlpha(0)
    mount.appendChild(renderer.domElement)

    // Estrellas
    const starCount = 20000
    const starPositions = new Float32Array(starCount * 3)
    const starColors = new Float32Array(starCount * 3)
    const colors = [0xffffff, 0xfff6d9, 0xb0c4ff, 0xffd1dc].map(
      (c) => new THREE.Color(c),
    )
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 10000
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 10000
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10000
      const col = colors[Math.floor(Math.random() * colors.length)]
      starColors[i * 3] = col.r
      starColors[i * 3 + 1] = col.g
      starColors[i * 3 + 2] = col.b
    }
    const starGeom = new THREE.BufferGeometry()
    starGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3),
    )
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3))
    const starMat = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
    })
    const stars = new THREE.Points(starGeom, starMat)
    scene.add(stars)

    // Cometas

    const resize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(mount)
    resize()

    // Animación
    const loop = () => {
      stars.rotation.y += 0.0002
      camera.position.z -= 0.5
      if (camera.position.z < -5000) camera.position.z = 1500
      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mount.removeChild(renderer.domElement)
      starGeom.dispose()
      starMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
