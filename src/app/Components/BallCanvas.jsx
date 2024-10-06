"use client";
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import CanvasLoader from './CanvasLoader'





const Ball=({imgUrl})=>{
    
    // const [decal]= useTexture([imgUrl]);
    //  const [decal] = useLoader(TextureLoader,[imgUrl])
   
    return(
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25}/>
            <directionalLight position={[0,0,0.05]}/>
            <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1,1]}/>
            <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            attach="material"
            />
            <Decal
            position={[0,0,1]}
            rotation={[2*Math.PI, 0, 6.25]}
             map={decal}
            />
            </mesh>
        </Float>
    )
}


const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='demand'
    dpr={[1, 2]}
    gl={{preserveDrawingBuffer:true}}
    className=''
    >
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls enableZoom={false}/>
            <Ball imgUrl={icon} />
        </Suspense>

        <Preload all/>

    </Canvas>
  )
}

export default BallCanvas