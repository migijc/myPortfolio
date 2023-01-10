import ContactMeForm from "./ContactMeForm"

export default function ContactMe(){
    return(
        <section className="contact-me-page">
            <div className="main-content">
                 <div className="left">
                 <h1 className="page-title about-me-title">
                    <span className="contact-ch-one">C</span>
                    <span className="contact-ch-two">o</span>
                    <span className="contact-ch-three">n</span>
                    <span className="contact-ch-four">t</span>
                    <span className="contact-ch-five">a</span>
                    <span className="contact-ch-six">c</span>
                    <span className="contact-ch-seven">t</span>
                    <span className="contact-ch-eight">m</span>
                    <span className="contact-ch-nine">e</span>
                    <span className="contact-ch-ten">!</span>

                 </h1>
                 <p className="contact-me-para main-para">Thank you for visiting my portfolio! If you're interested in working with me, please don't hesitate to reach out via the contact form.
                    I may be available for freelancing projects but at the moment I am interested in working with a company on a full-time basis.
                      I look forward to discussing potential opportunities with you!</p>
                 <ContactMeForm/>   
                
                 </div>
                 <div className="right"></div>
       
               </div>
            {/* <hr className="page-title-seperator"/> */}
        
        </section>
    )
}