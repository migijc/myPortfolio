import { useEffect, useRef, useState } from "react"
import {IoMenuOutline} from "react-icons/io5"
import logo from "../img/logoTransparent.png"
import Menu from "./Menu"
import {AiOutlineCloseCircle} from "react-icons/ai"
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import ProjectsDisplay from "./ProjectsDisplay"


export default function MenuBar(props){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    let setPage=props.setPage
    let onScroll= props.onScroll

    function openTopMenu(){
         getCurrentMenu()
         setIsMenuOpen(true)
       
    }

    useEffect(()=>{
        let app= document.body.querySelector(".App")
        app.addEventListener("click", (e)=>{    
            let menuTopRef= document.body.querySelector(".top-bar")
            let menuBottomRef= document.body.querySelector(".side-bar")
            if(isMenuOpen){
                if(props.isScreenOver1200){
                    menuBottomRef.classList.remove("side-visible")
                    return setIsMenuOpen(false)
                } else{
                    menuTopRef.classList.remove("top-visible")
                    return setIsMenuOpen(false)
                }
               
            }
        })
    })

    function getCurrentMenu(){
        console.log("ayoo")
        let menuTopRef= document.body.querySelector(".top-bar")
        let menuBottomRef= document.body.querySelector(".side-bar")

        if(props.isScreenOver1200){
            menuBottomRef.classList.add("side-visible")
        }
        else{
            menuTopRef.classList.add("top-visible")
        }
    }

    return (
        <section className="menu-displayed">
            {isMenuOpen ===false && <IoMenuOutline className="menu-icon" onClick={()=> openTopMenu()}/>}
            <nav>
                <TopBar onScroll={onScroll} setIsMenuOpen={setIsMenuOpen}/>
            </nav>
            <nav>
                <SideBar onScroll={onScroll} setIsMenuOpen={setIsMenuOpen}/>
            </nav>
        </section>

    )
}