import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import { Environment, OrbitControls } from "@react-three/drei"


export default function ThreeScene(){

    

    return (
        <Canvas>
            {/* <Environment files={"./rainForest.hdr"} background={false} blur={1}/> */}
            <Model/>
            <OrbitControls enablePan={false} enableZoom={false}/>
            <directionalLight intensity={50} color={"#007FD0"} position={[7.5, 3.1, 7.5]}/>
            <directionalLight intensity={50} color={"#fff"} position={[-6.1, 9, -10.5]}/>


            <directionalLight intensity={50} color={"#007FD0"} position={[-6.1, -9.5, 7.5]}/>
            <directionalLight intensity={50} color={"#007FD0"} position={[-6.1, 8.5, -7.5]}/>
            {/* <directionalLight intensity={50} color={"#fff"} position={[6.1, 9, 10.5]}/> */}


            <directionalLight intensity={50} color={"#007FD0"} position={[4, 10, -8.6]}/>

            



        </Canvas>
    )
}