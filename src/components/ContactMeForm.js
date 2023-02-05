import { db } from "../FirebaseApp"
import { collection, addDoc, doc, onSnapshot} from "firebase/firestore"
import { useEffect, useRef, useState, } from "react"
import {IoMdClose, IoMdCheckmark} from "react-icons/io"
import {CgAsterisk} from "react-icons/cg"


export default function ContactMeForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const formRef = useRef(null)
    const nameInputRef= useRef(null)
    const emailInputRef= useRef(null)
    const subjectInputRef= useRef(null)
    const messageInputRef = useRef(null)

    let collectionRef = collection(db, "messagesReceived")
    const notificationRef = useRef(null)



 
    function displaySentNotification(){
        notificationRef.current.classList.add("open")
        setTimeout(()=>{
            notificationRef.current.classList.remove("open")
        }, 4000)
    }


    function handleNameInput(e) {
        setName(e.target.value)
    }

    function handleEmailInput(e) {
        setEmail(e.target.value)
    }

    function handleSubjectInput(e) {
        setSubject(e.target.value)
    }

    function handleMessageInput(e) {
        setMessage(e.target.value)
    }

    function resetForm(){
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    async function sendMessage(){
        if(formRef.current.checkValidity()){
            await addDoc((collectionRef), {
                name,
                email,
                subject,
                message,
            }).then(()=>{
                resetForm()
                displaySentNotification()
            })
           
        } else{
        formRef.current.reportValidity()
        }
    }

    return (
        <form noValidate ref={formRef} className="contact-me-form">
            <div className="name-input-container input-container">
                <input type="text" id="name" placeholder="Name" onChange={(e) => handleNameInput(e)} value={name} ref={nameInputRef} minLength={2} required/>
                {name === "" && <CgAsterisk className="input-validation-icon"/>}
            </div>
            <div className="email-input-container input-container">
                <input type="email" id="email" placeholder="Email" onChange={(e)=>handleEmailInput(e)} value={email} ref={emailInputRef} required/>
                {email === "" && <CgAsterisk className="input-validation-icon"/>}
            </div>
            <div className="subject-input-container input-container">
                <input type="text" id="subject" placeholder="Subject" onChange={(e)=>handleSubjectInput(e)} value={subject} ref={subjectInputRef} required minLength={5} maxLength={70} />
                {subject === "" && <CgAsterisk className="input-validation-icon"/>}
            </div>
            <div className="textarea-container input-container">
                <textarea placeholder="Message" onChange={(e)=>handleMessageInput(e)} value={message} ref={messageInputRef} required maxLength={500}></textarea>
            </div>
            <button onClick={()=>sendMessage()} className="send-message-btn" type="button"  >Send Message</button>
            <div ref={notificationRef} className="sent-notification">
                <p>Message sent!</p>
            </div>
        </form>
    )
}