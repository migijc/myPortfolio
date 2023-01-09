import battleshipMain from "../img/battleship/battleshipMain.png"
import iFindMain from "../img/iFind/iFindMain.png"
import instaMain from "../img/insta/instaMain.png"
import instaProfile from "../img/insta/instaProfile.png"
import instaEdit from "../img/insta/instaEdit.png"
import todoMain from "../img/todo/todoMain.png"
import { useEffect, useState } from "react"
import OpenProject from "./OpenProject"










export default function ProjectsDisplay(props){
    const [viewedProject, setViewedProject] = useState(null)

    function handleHover(e){
        setViewedProject(e.target.parentNode.dataset.project)
    }

    useEffect(()=>{

            props.updateProjectToOpen(viewedProject)
        
    },[viewedProject])


    return(
        <div className="projects-container">
            <div className="feat-project-container feat-one" data-project={"insta"} >
                <img src={instaMain} className="featured-image"/>
                <div className="image-cover" data-project={"insta"}/>
                <button className="view-project-button" onClick={(e)=>{handleHover(e)}}>View Project</button>
            </div>
            <div className="feat-project-container feat-two" data-project={"ifind"}>
                <img src={iFindMain} className="featured-image "/>
                <div className="image-cover" data-project={"iFind"}/>
                <button className="view-project-button" onClick={(e)=>{handleHover(e)}}>View Project</button>
            </div>
            <div className="feat-project-container feat-three" data-project={"battleship"}>
                <img src={battleshipMain} className="featured-image "/>
                <div className="image-cover" data-project={"battleship"}/>
                <button className="view-project-button" onClick={(e)=>{handleHover(e)}}>View Project</button>
            </div>
            <div className="feat-project-container feat-four" data-project={"todo"}>
                <img src={todoMain} className="featured-image "/>
                <div className="image-cover" data-project={"todo"}/>
                <button className="view-project-button" onClick={(e)=>{handleHover(e)}}>View Project</button>
            </div>
        </div>
    )
}

