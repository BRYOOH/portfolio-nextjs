"use client";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"
import pc from '../planet/draco.glb'
import man from '../behemoth/behemoth.glb'

const Earth=()=>{
 const {earth} = useGLTF(pc)
//  const {earth} = useLoader(GLTFLoader,man)
// // const draco = new DRACOLoader();
// // draco.setDecoderConfig({ type: 'js' });
// // draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
 return(
  <primitive
  object={earth.scene}
  />
 )

}

const EarthCanvas = () => {
  return (
    <Canvas>
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls/>
       <Earth/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default EarthCanvas