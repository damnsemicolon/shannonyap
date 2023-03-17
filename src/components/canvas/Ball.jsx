import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Decal, Float, OrbitControls, Preload, useTexture 
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={3}>
      {/* sides of the icoshahedron */}
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial 
          color='#fff8eb'
          flatShading
        />
        <Decal 
        position={[0,0,1]}
        rotation={ [2 * Math.PI, 0, 6.25]}
        map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas