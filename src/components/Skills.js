import { useEffect, useState } from "react"
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
       SiGit,
       SiMongodb
   } from "react-icons/si"

export default function Skills(){
    const [listOfSkills, setListOfSkills] = useState(null)

    function getAllSkills(){
        let listKey= 1
        let list= []
        for(let key in skills){
            list.push(
                <div key={listKey} className="skill-wrapper"> 
                    <p style={{whiteSpace: 'nowrap'}}>{skills[key].name}</p>
                    {skills[key].icon}
                </div>
            )
            listKey++
        }
        setListOfSkills(list)
    }
    useEffect(() => {
        getAllSkills()
    }, [])



    if(listOfSkills) {
            return (
        <div className="skills-container">
           {listOfSkills.map(skill=>{
                return skill
           })}
        </div>
    )
    }

}

const skills = {
    reactjs: {
        name: "React.js",
        icon: <SiReact/>
    },
    three: {
        name: "Three.js",
        icon: <SiThreedotjs/>
    },
    reactNative: {
        name: "React Native",
        icon: <SiReact/>
    },
    css: {
        name: " Vanilla CSS",
        icon: <IoLogoCss3/>
    },
    html: {
        name: "HTML",
        icon: <IoLogoHtml5/>
    },
    javascript: {
        name: "JavaScript",
        icon: <IoLogoJavascript/>
    },
    node: {
        name: "Node",
        icon: <SiNodedotjs/>
    },
    firebase: {
        name: "Firebase",
        icon: <SiFirebase/>
    },
    mongo: {
        name: "MongoDB",
        icon: <SiMongodb/>
    },
    npm: {
        name: "NPM",
        icon: <IoLogoNpm/>
    },
    git: {
        name: "Git",
        icon: <SiGit/>
    },
    webpack: {
        name: "Webpack",
        icon: <SiWebpack/>
    },
    jest: {
        name: "Jest",
        icon: <SiJest/>
    },
    adobexd: {
        name: "Adobe XD",
        icon: <SiAdobexd/>
    },
    github: {
        name: "Github",
        icon: <IoLogoGithub/>
    },
    blender: {
        name: "Blender",
        icon: <SiBlender/>
    },

}