import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./enterprise/scene.gltf')
  const [rotation, setRotation] = useState(0)

  useFrame(() => {
    setRotation(rotation => rotation - 0.004)
  })

  return (
    <mesh rotation-y={rotation}>
      <hemisphereLight intensity={1} groundColor='black' />
      <primitive
        object={computer.scene}
        scale={0.2}
        position={[6, -1, 6]}
        rotation={[-0.1, -0.75, 0.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
