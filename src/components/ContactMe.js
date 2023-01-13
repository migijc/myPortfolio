import { useEffect, useRef } from "react"
import ContactMeForm from "./ContactMeForm"

export default function ContactMe(){
    const pageTitleRef= useRef(null)

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

    useEffect(()=>{
        if(pageTitleRef){
            observer.observe(pageTitleRef.current)
        }
    }, [])


    function animateHover(e){
        e.target.classList.add("span-hovered")
        setTimeout(()=>{
            e.target.classList.remove("span-hovered")
        }, 1000)
    }


    return(
        <section className="contact-me-page">
            <div className="main-content">
                 <div className="left">
                 <h1 className="page-title about-me-title" ref={pageTitleRef}>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-one">C</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-two">o</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-three">n</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-four">t</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-five">a</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-six">c</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-seven">t</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-eight">m</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-nine">e</span>
                    <span onMouseEnter={(e)=>animateHover(e)} className="contact-ch-ten">!</span>
                 </h1>
                 <p className="contact-me-para main-para">Thank you for visiting my portfolio! If you're interested in working with me, please don't hesitate to reach out via the contact form.<br/>
                    <br/>I may be available for freelancing projects but at the moment I am interested in working with a company on a full-time basis.
                      I look forward to discussing potential opportunities with you!</p>
                 <ContactMeForm/>   
                 </div>
                 <div className="right"></div>
       
               </div>
            {/* <hr className="page-title-seperator"/> */}
        
        </section>
    )
}