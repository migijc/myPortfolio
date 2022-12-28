import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { useThree } from "@react-three/fiber"


export default function Model(){

    let model= useLoader(GLTFLoader, "./te.glb")
    const {camera}= useThree()
      
    


    return <primitive object={model.scene} position={[-0.1, -3.5, 0]} />
}