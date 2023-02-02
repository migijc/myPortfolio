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
            <div className="skill-icon-container">
                <SiReact className="skill-icon" data-name={"React.js"}/>
            </div>

            <div className="skill-icon-container">
                <SiThreedotjs className="skill-icon" data-name={"Three.js"}/>
            </div>

            <div className="skill-icon-container">
                <IoLogoCss3 className="skill-icon" data-name={"CSS"}/>
            </div>

            <div className="skill-icon-container">
                <IoLogoHtml5 className="skill-icon" data-name={"HTML"}/>
            </div>

            <div className="skill-icon-container">
                <IoLogoJavascript className="skill-icon" data-name={"JavaScript"}/>
            </div>

            <div className="skill-icon-container">
                <SiNodedotjs className="skill-icon" data-name={"Node.js"}/>
            </div>

            <div className="skill-icon-container">
                <SiFirebase className="skill-icon" data-name={"Firebase"}/>
            </div>

            <div className="skill-icon-container">
                <IoLogoNpm className="skill-icon" data-name={"NPM"}/>
            </div>

            <div className="skill-icon-container">
                <SiGit className="skill-icon" data-name={"Git"}/>
            </div>

            <div className="skill-icon-container">
                <SiWebpack className="skill-icon" data-name={"Webpack"}/>
            </div>

            <div className="skill-icon-container">
                <SiJest className="skill-icon"  data-name={"Jest"}/>
            </div>

            <div className="skill-icon-container">
                <SiAdobexd className="skill-icon"  data-name={"Adobe XD"}/>
            </div>

            <div className="skill-icon-container">
                <IoLogoGithub className="skill-icon"  data-name={"Github"}/>
            </div>

            <div className="skill-icon-container">
                <SiBlender className="skill-icon"  data-name={"Blender"}/>
            </div>  
        </div>
    )
}