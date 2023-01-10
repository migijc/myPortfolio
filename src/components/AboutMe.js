import myPic from "../img/myPicCropped.jpg"
import { Canvas } from "@react-three/fiber"
import MySkills from "./MySkills"
import { useEffect, useRef } from "react"
import { CgOptions } from "react-icons/cg"

export default function AboutMe(){
    const pageTitle= useRef(null)

    let observer= new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                pageTitle.current.classList.add("on-screen")
                setTimeout(()=>{
                    pageTitle.current.classList.remove("on-screen")
                }, 2200)
            }
        })
    })

    useEffect(()=>{
        if(pageTitle){
            observer.observe(pageTitle.current)
        }
    },[])



    return (
        <section className="about-me-page">
                <div className="main-content">
                    <div className="left">
                    <h1 ref={pageTitle} className="page-title about-me-title">
                        <span className="about-ch-one">A</span>
                        <span className="about-ch-two">b</span>
                        <span className="about-ch-three">o</span>
                        <span className="about-ch-four">u</span>
                        <span className="about-ch-five">t</span>
                        <span className="about-ch-six">m</span>
                        <span className="about-ch-seven">e</span>
                    </h1>
                    <div className="img-container">
                        <img src={myPic} className="my-pic"/>
                    </div>
                    <p className="about-me-para main-para">
                    A self taught Front-End Developer based in Miami, Florida, extremely passionate about creating engaging and dynamic user experiences through the use of UI effects and animations.<br/>
                    <br/>I pride myself on being a well-organized, problem-solving individual with a strong attention to detail. I enjoy watching UFC and Formula1, as well as stand-up comedy.
                    I also have a slight obsession with dogs. In addition to my professional pursuits, I love to spend time with my family. <br/>
                    <br/>Overall, I am interested in all aspects of front-end development and am eager to work on challenging projects..
                    </p>
                 </div>
                 <div className="right">
                    <MySkills/>
                </div>
               </div>
           
            {/* <hr className="page-title-seperator"/> */}
      
        </section>
    )
}














    {/* <section className="page-split">
                    <div className="learning-journey main-content-section">
                        <h2>Learning Journey</h2>
                        <p>It wasn't until I was in my mid-20s that I finally got my chance to begin my journey. I had been working as a legal case manager at a  law firm,
                             but I was tired of feeling unfulfilled in my job. I decided to take matters into my own hands and began teaching myself web development.
                              I started by taking online courses and working through tutorials, and before long, I was making real progress. I was learning HTML, CSS, and JavaScript,
                               and I was starting to see the results of my hard work. I even built my own website from scratch, which was a huge accomplishment for me.
                                I eventually left my job as a paralegal and I decided to take my studying full time. The first few weeks were tough. It was a struggle to find the energy and motivation to keep going.
                                 But I was determined to make this work. I set aside at least a eight hours each day to work on the course materials, and before long, I was actually programming.
                                  From the very foundations of HTML and CSS to algorithms and data structures such as Binary Search Trees, Linked Lists,
                                   and Merge Sort algorithms and how to implement them in code using Javascript. Im cery excited to see where this journey leads to next.
                              </p>
                    </div>
              
                </section> */}


      {/* <div className="pre-code main-content-section">
                        <h2>Before Programming</h2>
                        <p>As a child, I was always fascinated by technology. I remember spending hours on end playing games on my computer and downloading movies and music using torrents.
                             I had a natural curiosity about how things worked and was always eager to learn more.Despite my passion for technology, I never took the opportunity to study it formally.
                              I had decided to take on a series of odd jobs to make ends meet. But I never lost my love for technology, and I knew that one day I would find a way to turn my passion into a career.
                               I always had a thing for problem solving but I never quite put the two together. Aside from wages, obviously, the jobs I worked weren’t giving me a feeling of satisfaction,
                                I worked basic jobs from customer service to more serious roles such as marketing director and legal case manager.
                                 After years of not really getting anywhere and working unfulfilling jobs I knew what my next step in life had to be, I know I couldn't have made a better choice. </p>
                    </div> */}