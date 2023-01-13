import ProjectsDisplay from "./ProjectsDisplay"
import { useEffect, useRef, useState } from "react"
import OpenProject from "./OpenProject"
import {AiOutlineCloseCircle} from "react-icons/ai"

export default function Projects(){
    const [viewedProject, setViewedProject] = useState(null)
    const pageTitleRef= useRef(null)

    let closeProject= <AiOutlineCloseCircle className="close-project-icon" onClick={()=>setViewedProject(null)}/>

    let observer= new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                pageTitleRef.current.classList.add("on-screen")
                setTimeout(()=>{
                    pageTitleRef.current.classList.remove("on-screen")
                }, 2500)
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
        <section className="projects-page">
        <div className="main-content">
            <div className="left">
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
            
            <p className="about-me-para main-para">
                During my journey, I had the opportunity to complete over 20 small projects as part of my studies on <a href="https://theodinproject.com">theodinproject.com</a>.
                 These projects can be viewed on my Github profile <a href="https://github.com/migijc">here</a>.<br/>
                  <br/>Among these projects, my personal favorites were a replica of the popular photo-sharing app Instagram and a photo-tagging game similar to "Where's Waldo".
                   You can see these projects and a few others beside, the source code is also available for review on my Github.
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