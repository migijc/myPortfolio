import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { useThree } from "@react-three/fiber"


export default function Model(props){
    const [positionZ, setPostionZ] = useState(0)
    
    
    let model= useLoader(GLTFLoader, "./nameNoLights.glb")

    const {camera}= useThree()
    useEffect(()=>{
        props.setCamera(camera)
    })

    useEffect(()=>{
        let width= window.innerWidth
        if(props.isWidthOver1200){
            if(width < 2000){
              return setPostionZ(1)
            } else if(width > 1900){
                return setPostionZ(1.7)
            } 
            // return setPostionZ(0)
        } else{
            if(width < 500){
                return setPostionZ(-2.8)
            }
            return setPostionZ(-1.9)
        }
       
    }, [props.isWidthOver1200])

      
    return (
        <>
            <primitive object={model.scene} position={[0, 0, positionZ]} />
        </>
    )
}