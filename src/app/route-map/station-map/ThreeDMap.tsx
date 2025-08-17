'use client'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import clsx from 'clsx'

const floors = ['B1', 'B2', 'B3', 'B4']

export function ThreeDMap() {
  const [currentFloor, setCurrentFloor] = useState('B1')

  return (
    <div className="relative h-dvh max-h-[calc(100dvh-var(--height-nav-header)-var(--height-drawer))]">
      <div className="absolute bottom-5 left-5 z-30 flex flex-col gap-3">
        {floors.map((floor) => (
          <button
            key={floor}
            className={clsx(
              'text-body-bold rounded-md border border-gray-200 px-2.5 py-1.5 shadow-lg active:bg-gray-100',
              currentFloor === floor ? 'bg-gradient-primary text-white' : 'bg-white text-gray-600'
            )}
            onClick={() => setCurrentFloor(floor)}
          >
            {floor}
          </button>
        ))}
      </div>

      <Canvas
        style={{
          width: '100%',
          height: '100%',
        }}
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AllFloorModel b1Opacity={0.5} />

          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

function AllFloorModel({ b1Opacity }: { b1Opacity: number }) {
  const { scene, nodes } = useGLTF('/station-map-all.glb') as any

  const b1Name = 'b1(58D6E911-C078-4DF4-944D-E5432986264A)'

  // 確保不會影響共用材質
  if (nodes[b1Name]?.material) {
    nodes[b1Name].material = nodes[b1Name].material.clone()
    nodes[b1Name].material.transparent = true
    nodes[b1Name].material.opacity = b1Opacity
  }

  return <primitive object={scene} />
}

// function AllFloorModel(props: any) {
//   const { scene } = useGLTF('/station-map-all.glb')
//   return <primitive object={scene} {...props} />
// }

// function B1Model(props: any) {
//   const { scene } = useGLTF('/station-map-b1.glb')
//   return <primitive object={scene} {...props} />
// }

// function B2Model(props: any) {
//   const { scene } = useGLTF('/station-map-b2.glb')
//   return <primitive object={scene} {...props} />
// }

// function B3Model(props: any) {
//   const { scene } = useGLTF('/station-map-b3.glb')
//   return <primitive object={scene} {...props} />
// }

// function B4Model(props: any) {
//   const { scene } = useGLTF('/station-map-b4.glb')
//   return <primitive object={scene} {...props} />
// }
