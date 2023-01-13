import ThreeScene from "../components/threeComps/ThreeScene"
import {FiMenu} from "react-icons/fi"
import {VscMenu} from "react-icons/vsc"
import Menu from "./Menu"
import {useEffect, useState, useRef} from "react"


export default function Home(props){
    const [displayOn, setDisplayOn] = useState(false)
    const textTop= useRef(null)
    const textBottom= useRef(null)

    
    function handleMenuClick(){
        if(!displayOn){
            setDisplayOn(true)
        }
    }

    useEffect(()=>{
        async function animateHomeText(){
            textTop.current.classList.add("top-start")
            setTimeout(()=>{
                textBottom.current.classList.add("bottom-start")
            }, 3800)
            
        }

        animateHomeText()
    }, [])





    return (
        <section className="home-page">
            <ThreeScene/>
            {/* <VscMenu className="icon menu-icon" onClick={handleMenuClick}/> */}
            {/* {displayOn && <Menu/>} */}
            <div className="home-text-top-container">
                <p ref={textTop}className="description-home-top">Hey! I'm </p>
            </div>
            <div className="home-text-bottom-container">
                <p ref={textBottom} className="description-home-bottom">Frontend Web Developer</p>
                <button className="contact-me-btn" onClick={()=>props.scrollTo()}>Contact me</button>
            </div>

            

        </section>
    )
}