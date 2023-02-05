import ProjectsDisplay from "./ProjectsDisplay"
import SlidingDisplay from "./SlidingDisplay"
import { useEffect, useRef, useState } from "react"
import OpenProject from "./OpenProject"
import {AiOutlineCloseCircle} from "react-icons/ai"

export default function Projects(props){
    const [viewedProject, setViewedProject] = useState(null)
    const pageTitleRef= useRef(null)

    let closeProject= <AiOutlineCloseCircle className="close-project-icon" onClick={()=>setViewedProject(null)}/>

    let observer= new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                setTimeout(()=>{
                    pageTitleRef.current.classList.add("on-screen")
                }, 400)
                setTimeout(()=>{
                    pageTitleRef.current.classList.remove("on-screen")
                }, 2900)
            }
        })
    })


    function animateHover(e){
        e.target.classList.add("span-hovered")
        setTimeout(()=>{
            e.target.classList.remove("span-hovered")
        }, 1000)
    }





    useEffect(()=>{
        if(pageTitleRef){
            observer.observe(pageTitleRef.current)
        }
    }, [])


    function updateProjectToOpen(project){
        setViewedProject(project)
    }
    
    return (
        <section className="projects-page parallax-layer">
            <div className="main-content">
                <h1 className="page-title projects-title" ref={pageTitleRef}>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-one">P</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-two">r</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-three">o</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-four">j</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-five">e</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-six">c</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-seven">t</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="projects-ch-eight">s</span>
                </h1>                
            <div className="primary-info-container page-info-container">
                <p className="projects-primary-para primary-para">
                    During my journey, I had the opportunity to complete over 20 small projects as part of my studies on <a href="https://theodinproject.com">The Odin Project</a>.
                    These projects can be viewed on my Github profile <a href="https://github.com/migijc">here</a>.<br/>
                    <br/>Among these projects, my personal favorites were a replica of the popular photo-sharing app Instagram and a photo-tagging game similar to "Where's Waldo".
                    You can see these projects and a few others on display, the source code is also available for review on my Github.
                </p>
                <div className="skills-level-container">
                    <div className="skill-proficiency-wrapper">
                        <label htmlFor="front-end">Front-end</label>
                        <progress id="front-end" max={"100"} value="90" aria-label="front-end proficiency level"></progress>
                    </div>
                    <div className="skill-proficiency-wrapper">
                        <label htmlFor="react-js">React.js</label>
                        <progress id="react-js" max={"100"} value="85" aria-label="React.js proficiency level"></progress>
                    </div>
                    <div className="skill-proficiency-wrapper">
                        <label htmlFor="three-js">Three.js</label>
                        <progress id="three-js" max={"100"} value="69" aria-label="Three,js proficiency level"></progress>
                    </div>
                    <div className="skill-proficiency-wrapper">
                        <label htmlFor="back-end">Back-end</label>
                        <progress id="back-end" max={"100"} value="50" aria-label="back-end proficiency level"></progress>
                    </div>
                </div>
            </div>
            <div className="secondary-info-container page-info-container">
                {/* {props.isScreenOver1200 === true && <ProjectsDisplay  updateProjectToOpen={updateProjectToOpen}/>} */}
                 <SlidingDisplay updateProjectToOpen={updateProjectToOpen}/>
            </div>
            {viewedProject && <OpenProject name={viewedProject} closeButton={closeProject}/>}
        </div>
    </section>
    )
}