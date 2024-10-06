"use client";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from "./CanvasLoader"

import Draco from '@/app/planet/Draco'

// const Earth=()=>{
//  const {earth} = useGLTF(pc)
//  return(
//   <primitive
//   object={earth.scene}
//   />
//  )

// }

const EarthCanvas = () => {
  return (
    <Canvas>
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls/>
         <Draco/>
        </Suspense>
        <Preload all/>
    </Canvas>
  )
}

export default EarthCanvas