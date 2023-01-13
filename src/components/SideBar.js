import Menu from "../components/Menu";
import logoWBlack from "../img/logoBlackBg.png"
import logo from "../img/logoTransparent.png"
import {RiLinkedinFill} from "react-icons/ri"
import {RiGithubFill} from "react-icons/ri"



export default function SideBar(props){

    let handleMenuClick=props.handleClick 

    return (
        <section className="menu-section">
        <img src={logo} className="logo"/>
        <Menu handleOptionClick={handleMenuClick}/>
        <div className="my-links">
            <a href="https://www.linkedin.com/in/miguel-gil-a7169316b" ><RiLinkedinFill className="link-to-LinkedIn link-icon"/></a>
            <a href="https://github.com/migijc"><RiGithubFill className="link-to-github link-icon"/></a>
        </div>
      </section>
    )
}