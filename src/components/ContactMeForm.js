import { db } from "../FirebaseApp"
import { collection, addDoc, doc } from "firebase/firestore"
import { useEffect, useState, } from "react"
import {IoMdClose, IoMdCheckmark} from "react-icons/io"
import {CgAsterisk} from "react-icons/cg"


export default function ContactMeForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    let collectionRef = collection(db, "messagesReceived")

    useEffect(() => {
        console.log(collectionRef)
    }, [])

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
console.log("attempting")
        resetForm()
        await addDoc((collectionRef), {
            name,
            email,
            subject,
            message,
        })

        console.log("complete")
    }



    return (
        <form>
            <div className="name-input-container">
                <input type="text" id="name" placeholder="Name" onChange={(e) => handleNameInput(e)} value={name} minLength="4ch"/>
                {name === "" && <CgAsterisk className="input-validation-icon"/>}
                <IoMdCheckmark className="input-validation-icon name-on-valid"/>
                <IoMdClose className="input-validation-icon name-on-invalid"/>

            </div>
            <div className="email-input-container">
                <input type="email" id="email" placeholder="Email" onChange={(e)=>handleEmailInput(e)} value={email}/>
                {email === "" && <CgAsterisk className="input-validation-icon"/>}
                <IoMdCheckmark className="input-validation-icon email-on-valid"/>
                <IoMdClose className="input-validation-icon email-on-invalid"/>

            </div>
            <div className="subject-input-container">
                <input type="text" id="subject" placeholder="Subject" onChange={(e)=>handleSubjectInput(e)} value={subject} minLength="3ch"/>
                {subject === "" && <CgAsterisk className="input-validation-icon"/>}
                <IoMdCheckmark className="input-validation-icon subject-on-valid"/>
                <IoMdClose className="input-validation-icon subject-on-invalid"/>

            </div>
            <div className="textarea-container">
                <textarea placeholder="Message" onChange={(e)=>handleMessageInput(e)} value={message}></textarea>
            </div>
            <button onClick={()=>sendMessage()} className="send-message-btn" type="button"  >Send Message</button>
        </form>
    )
}