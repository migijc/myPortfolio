
export default function ContactMeForm(){

    return (
        <form>
           <div className="name-input-container">
                <input type="text" id="name" placeholder="Name"/>
           </div>
           <div className="email-input-container">
                <input type="email" id="email" placeholder="Email"/>
           </div>
           <div className="subject-input-container">
                <input type="text" id="subject" placeholder="Subject"/>
           </div>
           <textarea placeholder="Message"></textarea>


        </form>
    )
}