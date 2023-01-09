import {IoLogoReact,
     IoLogoHtml5,
        IoLogoCss3,
       IoLogoJavascript,
       IoLogoNpm,
       IoLogoGithub

    } from "react-icons/io"
import {SiThreedotjs,
     SiNodedotjs,
      SiWebpack,
       SiJest,
        SiAdobexd,
        SiBlender,
        SiReact,
        SiFirebase,
        SiGit
    } from "react-icons/si"




export default function MySkills(){


    return (
        <div className="skills-container">
            <div className="skill-container">
                <p>React.js</p>
                <SiReact className="skill-icon" data-name={"React.js"}/>
            </div>
            <div className="skill-container">
                <p>Three.js</p>
                <SiThreedotjs className="skill-icon" data-name={"Three.js"}/>
            </div>
            <div className="skill-container">
                <p>CSS</p> 
                <IoLogoCss3 className="skill-icon" data-name={"CSS"}/>
            </div>
            <div className="skill-container">
                <p>HTML</p>
                <IoLogoHtml5 className="skill-icon" data-name={"HTML"}/>
            </div>
            <div className="skill-container">
                <p>JavaScript</p>
                <IoLogoJavascript className="skill-icon" data-name={"JavaScript"}/>
            </div>
            <div className="skill-container">
                <p>Node.js</p>
                <SiNodedotjs className="skill-icon" data-name={"Node.js"}/>
            </div>
            <div className="skill-container">
                <p>Firebase</p>
                <SiFirebase className="skill-icon" data-name={"Firebase"}/>
            </div>
            <div className="skill-container">
                <p>NPM</p>
                <IoLogoNpm className="skill-icon" data-name={"NPM"}/>
            </div>
            <div className="skill-container">
                <p>Git</p>
                <SiGit className="skill-icon" data-name={"Git"}/>
            </div>
            <div className="skill-container">
                <p>Webpack</p>
                <SiWebpack className="skill-icon" data-name={"Webpack"}/>
            </div>
            <div className="skill-container">
                <p>Jest</p>
                <SiJest className="skill-icon"  data-name={"Jest"}/>
            </div>
            <div className="skill-container">
                <p>Adobe Xd</p>
                <SiAdobexd className="skill-icon"  data-name={"Adobe XD"}/>
            </div>
            <div className="skill-container">
                <p>Github</p>
                <IoLogoGithub className="skill-icon"  data-name={"Github"}/>
            </div>
            <div className="skill-container">
                <p>Blender</p>
                <SiBlender className="skill-icon"  data-name={"Blender"}/>
            </div>
        </div>
    )
}