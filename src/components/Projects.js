import instaImage from "../img/instaImage.png"
import ifind from "../img/photoTag.png"

export default function Projects(){

    return (
        <section className="projects-page">
        <h1 className="page-title projects-title">{"<projectsAndSkills/>"}</h1>
        <hr className="page-title-seperator"/>
        <div className="main-content">
            <h2>See my Github</h2>
            <p>Through out my journey, specificially on theodinproject.com, I was tasked with over twenty relatively small projects. All of which can be seen on my Github https://github.com/migijc. 
                Aside from my portfolio webisite my two favorite projects that I worked on are a clone of Instagram and a photo-tagging game similar to "Where's Waldo". Both can be seen below and the source code can also be viewed on my
                 Github.
            </p>
            <section className="featured-projects">
                <img className="featured-image" src= {instaImage}/>
                <img className="featured-image" src= {ifind}/>
            </section>
            <section className="my-skills">
                <div className="skill">
                    <h3>Languages</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>JSX</li>

                    </ul>
                </div>
                <div className="skill">
                <h3>Frameworks && Libraries</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Three.js</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                        <li>Webpack</li>
                    </ul>
                </div>
                <div className="skill">
                <h3>UI/UX Related</h3>
                    <ul>
                        <li>Adobe XD</li>
                        <li>Blender (Basic-level)</li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
    )
}