import { Canvas } from '@react-three/fiber'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

export function ThreeCanvas() {
  const { scene } = useGLTF('/metro-map.glb')

  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        position={[10, 10, 10]} // 斜 45° XZ + 30° Y角俯視
        zoom={500} // 可根據模型大小調整
        near={0.1}
        far={1000}
      />

      <OrbitControls
        enableRotate={false} // 鎖住旋轉，固定視角
        enablePan={true}
        enableZoom={true}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} />

      <primitive object={scene} scale={0.01} />
    </Canvas>
  )
}
