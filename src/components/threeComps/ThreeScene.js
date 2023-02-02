import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react"


export default function ThreeScene(props){
    const [camera, setCamera] = useState(null)



        return (
            <Canvas camera={camera}>                
                <Model setCamera={setCamera} isWidthOver1200={props.isWidthOver1200}/>
                <OrbitControls enablePan={true} enableZoom={true} enableDamping={true}/>
                <directionalLight intensity={50} color={"#007FD0"} position={[7.5, 3.1, 7.5]}/>
                <directionalLight intensity={50} color={"black"} position={[-6.1, 9, -10.5]}/>
                <directionalLight intensity={50} color={"#007FD0"} position={[-6.1, -9.5, 7.5]}/>
                <directionalLight intensity={50} color={"#007FD0"} position={[-6.1, 8.5, -7.5]}/>    
                <directionalLight intensity={50} color={"#007FD0"} position={[4, 10, -8.6]}/>
            </Canvas>
        )
}