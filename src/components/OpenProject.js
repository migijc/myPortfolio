import battleshipMain from "../img/battleship/battleshipMain.png"
import iFindMain from "../img/iFind/iFindMain.png"
import instaMain from "../img/insta/instaMain.png"
import instaProfile from "../img/insta/instaProfile.png"
import instaEdit from "../img/insta/instaEdit.png"
import todoMain from "../img/todo/todoMain.png"
import {AiOutlineCloseCircle} from "react-icons/ai"

export default function OpenProject(props){

    return (
        <div className="open-project-container">
            <div className="project-info">
                <h2 className="project-name">{projects[props.name].projectName}</h2>
                <p>{projects[props.name].projectDescription}</p>
                <a href={projects[props.name].githubLink}> Source Code</a>
            </div>
            <div className="project-images-container">
                <img src={projects[props.name].images[0]} alt="project dispaly"/>
            </div>
            {props.closeButton}
        </div>
    )
}

let projects={
    insta: {
        projectName: "Instagram Clone",
        projectDescription: "This project features a social media platform that allows users to share photos, as well as interact with each other through likes and comments. The front end of the website was built using React and JSX, while the back end of the website was built using Firebase. Some of the core functionalities of this Instagram clone include the ability to create a profile, follow other users, post and view content, and interact with others through likes, comments.",
        githubLink:"https://github.com/migijc/react-instagram-replica",
        images:[instaMain, instaProfile, instaEdit]
    },

    ifind:{
        projectName:"Ifind",
        projectDescription: "Ifind is a photo tagging game app similar to Where's Waldo, where users have to find three characters hidden in a crowded scene. The user interface of the app was created using React and the backend of the app was built using Firebase. In Ifind, users are presented with a series of photos featuring crowded scenes with three characters hidden among the crowds. The goal is to locate all three characters as quickly as possible by tapping on them in the photo. The app tracks the user's progress and displays their score upon completion of each round. Users can save their time and compare it to others on the leaderboard, allowing them to compete with friends and other players for the top spot.",
        githubLink: "https://github.com/migijc/react-phototag-app",
        images: [iFindMain]
    },


    battleship:{
        projectName:"Battleship",
        projectDescription: "This project is a web-based version of the classic board game, where users can play against the computer. It was built using React. In the game, players place their ships on a grid and take turns trying to sink each other's ships by guessing the coordinates of their opponent's ships. The player who sinks all of their opponent's ships first wins the game. The site features an intuitive nterface, allowing users to easily place their ships and make guesses.",
        githubLink:"https://github.com/migijc/battleShip",
        images:[battleshipMain]
    },

    todo:{
        projectName: "To-do List",
        projectDescription: "This project is a simple and effective tool for organizing and managing tasks. It was built using HTML, CSS, JavaScript, and webpack. The website allows users to create a list of tasks and mark them as complete when finished. It features a clean and easy-to-use interface, making it quick and straightforward to add and check off tasks. The website also includes options for sorting tasks by priority and setting due dates, helping users to stay on top of their workload and stay organized. ",
        githubLink: "https://github.com/migijc/To-do",
        images:[todoMain]
    }

}