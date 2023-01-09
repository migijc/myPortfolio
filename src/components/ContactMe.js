import ContactMeForm from "./ContactMeForm"

export default function ContactMe(){
    return(
        <section className="contact-me-page">
            <div className="main-content">
                 <div className="left">
                 <h1 className="page-title about-me-title">Contact me</h1>
                 <ContactMeForm/>   
                
                 </div>
                 <div className="right">
                    <p>PlaceHolder</p>
                </div>
               </div>
           
            {/* <hr className="page-title-seperator"/> */}
      
        </section>
    )
}