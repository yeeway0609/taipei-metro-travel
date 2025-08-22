'use client'
import * as THREE from 'three'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Billboard,
  Html,
  MapControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei'
import clsx from 'clsx'
import { MapIcons } from '@/assets/station-map-icons'
import { facilitiesData, FacilityType } from './facilitiesData'

const floors = ['b1', 'b2', 'b3', 'b4']

interface ThreeDMapProps {
  currentFacilityType: FacilityType | ''
  setCurrentFacilityType: (type: FacilityType | '') => void
}

export function ThreeDMap({ currentFacilityType, setCurrentFacilityType }: ThreeDMapProps) {
  const [currentFloor, setCurrentFloor] = useState('b1')
  const cam = useRef<THREE.OrthographicCamera>(null)

  const currentFacilityTypeNames = useMemo(
    () => facilitiesData.filter((facility) => facility.type === currentFacilityType).map((facility) => facility.uid),
    [currentFacilityType]
  )

  useEffect(() => {
    if (cam.current) cam.current.lookAt(new THREE.Vector3(0, 0, 0))
  }, [])

  function handleFloorChange(floor: string) {
    setCurrentFloor(floor)
  }

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
            onClick={() => handleFloorChange(floor)}
          >
            {floor.toUpperCase()}
          </button>
        ))}
      </div>

      <Canvas
        style={{
          width: '100%',
          height: '100%',
          zIndex: 20,
        }}
      >
        <OrthographicCamera makeDefault position={[1.5, 0.9, 1.5]} zoom={80} near={-100} far={1000} />
        <OrbitControls
          enableRotate={false}
          touches={{
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <AllFloorModel currentFloor={currentFloor} currentFacilityTypeNames={currentFacilityTypeNames} />
          <Html transform position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
            <div className="bg-primary-blue/20 flex aspect-[11/12] w-9 items-center justify-center rounded-full border-[0.3] border-[#95BCE1]/20">
              <div className="bg-primary-blue aspect-[11/12] w-3.5 rounded-full border-[1.5px] border-white" />
            </div>
          </Html>

          {facilitiesData.map((facility) => {
            const IconComponent = MapIcons[facility.type]
            return (
              <Html key={facility.uid} transform position={facility.position} rotation={[0, Math.PI / 4, 0]}>
                <IconComponent
                  className={clsx('size-3.5 opacity-50', currentFloor === facility.floor && 'opacity-100')}
                  onClick={() => setCurrentFacilityType(facility.type)}
                />
              </Html>
            )
          })}
        </Suspense>
      </Canvas>
    </div>
  )
}

interface AllFloorModelProps {
  currentFloor: string
  currentFacilityTypeNames: string[]
}

function AllFloorModel({ currentFloor, currentFacilityTypeNames }: AllFloorModelProps) {
  const { scene, nodes } = useGLTF('/station-map-all.glb') as any
  const originalColors = useRef<Record<string, THREE.Color>>({})

  Object.values(nodes).forEach((node: any) => {
    if (node.material) {
      if (!originalColors.current[node.name]) {
        originalColors.current[node.name] = node.material.color.clone()
      }
      node.material = node.material.clone()
      node.material.transparent = true

      node.material.color.set(originalColors.current[node.name])
      // node.material.depthWrite = false

      if (node.name.includes(currentFloor)) {
        node.material.opacity = 1
      } else {
        node.material.opacity = 0.05
      }

      if (currentFacilityTypeNames.some((name) => node.name === name)) {
        // node.material.opacity = 1
        node.material.color.set('#00EEFF')
      }
    }
  })

  return <primitive object={scene} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
}
