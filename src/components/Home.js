import ThreeScene from "../components/threeComps/ThreeScene"
import {FiMenu} from "react-icons/fi"
import {VscMenu} from "react-icons/vsc"
import Menu from "./Menu"
import {useEffect, useState, useRef} from "react"
import {ImArrowDown} from "react-icons/im"


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
            // textTop.current.classList.add("top-start")
            setTimeout(()=>{
                textBottom.current.classList.add("bottom-start")
            }, 450)
            
        }

        animateHomeText()
    }, [])





    return (
        <section className="home-page">
            

            {/* <div className="home-text-top-container home-text-container">
                <p ref={textTop}className="text-top home-text">Hey! I'm </p>
            </div> */}
            <ThreeScene isWidthOver1200={props.isScreenOver1200}/>
            <div className="home-text-bottom-container home-text-container">
                <p ref={textBottom} className="text-bottom home-text">Frontend Web Developer</p>
                <button className="contact-me-btn" onClick={()=>props.scrollTo()}>Contact me</button>
            </div>
        

            

        </section>
    )
}