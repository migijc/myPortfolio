import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"


export default function ThreeScene(){

    

    return (
        <Canvas>
            {/* <Environment files={"./rainForest.hdr"} background={false} blur={1}/> */}
            <Model/>
            <OrbitControls enablePan={true} enableZoom={true}/>           
        </Canvas>
    )
}