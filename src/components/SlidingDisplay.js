import battleshipMain from "../img/battleship/battleshipMain.png"
import iFindMain from "../img/iFind/iFindMain.png"
import instaMain from "../img/insta/instaMain.png"
import instaProfile from "../img/insta/instaProfile.png"
import instaEdit from "../img/insta/instaEdit.png"
import todoMain from "../img/todo/todoMain.png"
import { useRef, useState } from "react"
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"


export default function SlidingDisplay(props){
    // const [projectIndex, setProjectIndex] = useState(0)
    const projectList = [instaMain, battleshipMain, todoMain, iFindMain]

    // const [currentProject, setCurrentProject] = useState(instaMain)
    // const [nextProject, setNextProject] = useState(null)
    const imageOneRef = useRef(null)
    const imageTwoRef = useRef(null)
    const imageThreeRef = useRef(null)
    const imageFourRef = useRef(null)
    const imageContainerRefs=[imageOneRef, imageTwoRef, imageThreeRef, imageFourRef]


    function getIndexOfNext(index, containerClicked){
        console.log(index)
        if(containerClicked === "left-swipe-container"){
            if(+index === 0){
                return 3
            } else return +index -1
        }
        else{
            if(+index === 3){
                return 0
            } else return +index +1
        }
    }



    async function slideToNextImage(e){
        let currentImage= document.querySelector(".current")
        let currentIndex= currentImage.dataset.index
        let buttonClicked=e.target.closest("div").classList[0]
        let next
        if(buttonClicked === "left-swipe-container"){
            let indexOfNext=getIndexOfNext(currentIndex, buttonClicked)
            imageContainerRefs.forEach(ref=>{
                if(ref.current.dataset.index=== indexOfNext.toString()){
                   return next= ref
                }
            })

            currentImage.classList.add("slide-left-exit")
            setTimeout(()=>{
                currentImage.classList.remove("slide-left-exit")
                currentImage.classList.remove("current")

            }, 200)
            setTimeout(()=>{
                next.current.classList.add("current")
                next.current.classList.add("next-slide-left")
            }, 200)
            setTimeout(()=>{
                next.current.classList.remove("next-slide-left")
            }, 600) 
        }

        else{
            let indexOfNext=getIndexOfNext(currentIndex, buttonClicked)
            imageContainerRefs.forEach(ref=>{
                if(ref.current.dataset.index=== indexOfNext.toString()){
                   return next= ref
                }
            })

            currentImage.classList.add("slide-right-exit")
            setTimeout(()=>{
                currentImage.classList.remove("slide-right-exit")
                currentImage.classList.remove("current")

            }, 200)
            setTimeout(()=>{
                next.current.classList.add("current")
                next.current.classList.add("next-right-left")
            }, 200)
            setTimeout(()=>{
                next.current.classList.remove("next-right-left")
            }, 600) 
        }
    }



    function handleViewProjectClick(project){
        props.updateViewedProject(project)
    }

    return(
        <div className="projects-container-mobile">
            
            {/* <div className="featured-project-container-mobile"> */}
                <div className="left-swipe-container swipe-container" >
                    <RiArrowLeftSLine className="left-swipe-btn swipe-btn" onClick={(e)=>slideToNextImage(e)}/>
                </div>
                <div ref={imageOneRef} className="feat-img-container current slider-con-one" data-index="0">
                    <img src={projectList[0]} className="featured-image-mobile"/>
                    <button className="view-project-button">View Project</button>
                </div>
                <div ref={imageTwoRef} className="feat-img-container slider-con-two" data-index="1">
                    <img src={projectList[1]} className="featured-image-mobile"/>
                    <button className="view-project-button">View Project</button>
                </div>
                <div ref={imageThreeRef} className="feat-img-container slider-con-three" data-index="2">
                    <img src={projectList[2]} className="featured-image-mobile"/>
                    <button className="view-project-button">View Project</button>
                </div>
                <div ref={imageFourRef} className="feat-img-container slider-con-four" data-index="3">
                    <img src={projectList[3]} className="featured-image-mobile"/>
                    <button className="view-project-button">View Project</button>
                </div>
                <div className="right-swipe-container swipe-container" >
                    <RiArrowRightSLine className="right-swipe-btn swipe-btn" onClick={(e)=>slideToNextImage(e)}/>
                </div>
            {/* </div> */}
 
         
        </div>
    )
}