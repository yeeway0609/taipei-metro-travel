'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

export function ThreeDMap() {
  return (
    <Canvas style={{ height: 'calc(100dvh - var(--height-nav-header))' }} camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <B1Model position={[0, 0, 0]} />
        <B2Model position={[0, -3, 0]} />
        <B3Model position={[0, -6, 0]} />
        <B4Model position={[0, -9, 0]} />

        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

function B1Model(props: any) {
  const { scene } = useGLTF('/station-map-b1.glb')
  return <primitive object={scene} {...props} />
}

function B2Model(props: any) {
  const { scene } = useGLTF('/station-map-b2.glb')
  return <primitive object={scene} {...props} />
}

function B3Model(props: any) {
  const { scene } = useGLTF('/station-map-b3.glb')
  return <primitive object={scene} {...props} />
}

function B4Model(props: any) {
  const { scene } = useGLTF('/station-map-b4.glb')
  return <primitive object={scene} {...props} />
}
