import battleshipMain from "../img/battleship/battleshipMain.png"
import iFindMain from "../img/iFind/iFindMain.png"
import instaMain from "../img/insta/instaMain.png"
import instaProfile from "../img/insta/instaProfile.png"
import instaEdit from "../img/insta/instaEdit.png"
import todoMain from "../img/todo/todoMain.png"
import { useState } from "react"
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"


export default function SlidingDisplay(props){
    const [projectIndex, setProjectIndex] = useState(0)
    const projectList = [instaMain, battleshipMain, todoMain, iFindMain]

    function getNextIndex(e){
        if(e.target.classList[0]==="left-swipe-container" || e.target.classList[0]=== "left-swipe-btn"){
            if(projectIndex===0){
                return setProjectIndex(3)
            }else{
                return setProjectIndex(projectIndex - 1)
            }
        } else if(e.target.classList[0]==="right-swipe-container" || e.target.classList[0]=== "right-swipe-btn"){
            if(projectIndex===3){
                return setProjectIndex(0)
            }else{
                return setProjectIndex(projectIndex + 1)
            }
        }
    }

    return(
        <div className="projects-container-mobile">
            
            {/* <div className="featured-project-container-mobile"> */}
                <div className="left-swipe-container swipe-container" onClick={(e)=>getNextIndex(e)}>
                    <RiArrowLeftSLine className="left-swipe-btn swipe-btn"/>
                </div>
                <div className="feat-img-container">
                    <img src={projectList[projectIndex]} className="featured-image-mobile"/>
                </div>  
                {/* <button className="view-project-button">View Project</button> */}
                <div className="right-swipe-container swipe-container" onClick={(e)=>getNextIndex(e)}>
                    <RiArrowRightSLine className="right-swipe-btn swipe-btn"/>
                </div>
            {/* </div> */}
 
         
        </div>
    )
}