import React, { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame((state, delta) => {
    setRotation([rotation[0], rotation[1] + delta * 0.5, rotation[2] + delta * 0.25]);
  });
  

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh cashShadow receiveShadow scale={2.75} rotation={rotation}>
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

const BallCanvas = ({ icon}) => {
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

export default BallCanvas;
