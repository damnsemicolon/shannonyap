import { Suspense, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile, shouldRotate }) => {
  const computer = useGLTF('./enterprise/scene.gltf')
  const [rotation, setRotation] = useState(0)

  useFrame(() => {
    if (shouldRotate) {
      setRotation(rotation => rotation - 0.02);
    }
  })

  const memoizedComputer = useMemo(() => computer, [computer]);

  return (
    <mesh rotation-y={rotation}>
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <primitive
        object={memoizedComputer.scene}
        scale={isMobile ? 0.25 : 0.2}
        position={isMobile ? [3, -2, 3] : [6, -1, 6]}
        rotation={[-0.1, -0.8, 0.7]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [shouldRotate, setShouldRotate] = useState(false);

    useEffect(() => {
        // add a listener for screen size changes at 500px
        const mediaQuery = window.matchMedia('(max-width: 500px');
        // set the initial value for the 'isMobile' state variable
        setIsMobile(mediaQuery.matches);
        // define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        // add a callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    useEffect(() => {
        const handleBlur = () => {
            setShouldRotate(false);
        }
        const handleFocus = () => {
            setShouldRotate(true);
        }
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);
        return () => {
            window.removeEventListener('blur', handleBlur);
            window.removeEventListener('focus', handleFocus);
        }
    }, [])

    return (
        <Canvas
            frameloop='demand'
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: false }}
            pixelRatio={1} // set a lower resolution
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 1.8}
                    maxPolarAngle={Math.PI / 1.7}
                />
                <Computers isMobile={isMobile} shouldRotate={shouldRotate} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas