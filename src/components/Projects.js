import ProjectsDisplay from "./ProjectsDisplay"
import { useState } from "react"
import OpenProject from "./OpenProject"
import {AiOutlineCloseCircle} from "react-icons/ai"

export default function Projects(){
    const [viewedProject, setViewedProject] = useState(null)

    let closeProject= <AiOutlineCloseCircle className="close-project-icon" onClick={()=>setViewedProject(null)}/>


    function updateProjectToOpen(project){
        setViewedProject(project)
    }

    return (
        <section className="projects-page">
        <div className="main-content">
            <div className="left">
                 <h1 className="page-title projects-title">Projects</h1>
            
            <p className="about-me-para main-para">
                During my journey, I had the opportunity to complete over 20 small projects as part of my studies on theodinproject.com.
                 These projects can be viewed on my Github profile <a href="https://github.com/migijc">here</a>.<br/>
                  <br/>Among these projects, my personal favorites were a replica of the popular photo-sharing app Instagram and a photo-tagging game similar to "Where's Waldo".
                   You can see these projects and a few others below, the source code is also available for review on my Github.
            </p>
            </div>
            <div className="right">
                <ProjectsDisplay  updateProjectToOpen={updateProjectToOpen}/>
            </div>
            {viewedProject && <OpenProject name={viewedProject} closeButton={closeProject}/>}
        </div>
    </section>
    )
}