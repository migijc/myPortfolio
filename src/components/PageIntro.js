import { RedFormat } from "three"
import myPic from "../img/myPicCropped.jpg"

export default function PageIntro() {

    return(
        <div style={
            {display: 'flex',
             flexDirection: 'column' ,
             alignItems: 'center', 
             gap: '1.5rem',
             padding: '1rem',
             }}>
            <div className="my-image-container">
                 <img src={myPic} alt="Miguel Gil" />
            </div>

            <p className="introMessage">Hi, Im Miguel Gil</p>

            <h1 style={{fontSize: '1.8rem', textAlign: 'center', fontSize: '2rem'}}>Fullstack Developer<br/> React.js & React Native</h1>
            <SeeProjectsButton/>
        </div>
    )
}

function SeeProjectsButton(){

    return(
        <button style={{
            backgroundColor: 'var(--buttonGray)',
            border: '1px solid var(--borderGray)',
            padding: '1.2rem 3rem',
            borderRadius: '900rem',
            width: '25rem',
            fontSize: '1rem',
        }}>
        See Projects
        </button>
    )
}