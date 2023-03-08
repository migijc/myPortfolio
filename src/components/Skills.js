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
    const [listOfSkills, setListOfSkills] = useState(null);

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
        setListOfSkills(list);
    };

    useEffect(() => {
        getAllSkills();
    }, []);

    if(listOfSkills) {
            return (
        <div className="skills-container">
           {listOfSkills.map(skill=>{
                return skill;
           })}
        </div>
    )
    }

}

const skills = {
    reactjs: {
        name: "React.js",
        icon: <SiReact className="logoIcon"/>
    },
    three: {
        name: "Three.js",
        icon: <SiThreedotjs className="logoIcon"/>
    },
    reactNative: {
        name: "React Native",
        icon: <SiReact className="logoIcon"/>
    },
    css: {
        name: " Vanilla CSS",
        icon: <IoLogoCss3 className="logoIcon"/>
    },
    html: {
        name: "HTML",
        icon: <IoLogoHtml5 className="logoIcon"/>
    },
    javascript: {
        name: "JavaScript",
        icon: <IoLogoJavascript className="logoIcon"/>
    },
    node: {
        name: "Node",
        icon: <SiNodedotjs className="logoIcon"/>
    },
    firebase: {
        name: "Firebase",
        icon: <SiFirebase className="logoIcon"/>
    },
    mongo: {
        name: "MongoDB",
        icon: <SiMongodb className="logoIcon"/>
    },
    npm: {
        name: "NPM",
        icon: <IoLogoNpm className="logoIcon"/>
    },
    git: {
        name: "Git",
        icon: <SiGit className="logoIcon"/>
    },
    webpack: {
        name: "Webpack",
        icon: <SiWebpack className="logoIcon"/>
    },
    jest: {
        name: "Jest",
        icon: <SiJest className="logoIcon"/>
    },
    adobexd: {
        name: "Adobe XD",
        icon: <SiAdobexd className="logoIcon"/>
    },
    github: {
        name: "Github",
        icon: <IoLogoGithub className="logoIcon"/>
    },
    blender: {
        name: "Blender",
        icon: <SiBlender className="logoIcon"/>
    },

}