import ThreeScene from "../components/threeComps/ThreeScene"
import {FiMenu} from "react-icons/fi"
import {VscMenu} from "react-icons/vsc"
import Menu from "./Menu"
import {useState} from "react"


export default function Home(){
    const [displayOn, setDisplayOn] = useState(false)
    
    function handleMenuClick(){
        if(!displayOn){
            setDisplayOn(true)
        }
    }

    return (
        <section className="home-page">
            <ThreeScene/>
            <VscMenu className="icon menu-icon" onClick={handleMenuClick}/>
            {displayOn && <Menu/>}
            <p className="description-home">Frontend && <br/> UX/UI Developer</p>
            

        </section>
    )
}