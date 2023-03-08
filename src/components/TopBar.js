// import Menu from "./Menu"
import { MdOutlineMail } from "react-icons/md"
import {TiSocialLinkedinCircular, TiSocialGithubCircular} from 'react-icons/ti'
import {AiOutlineProject} from 'react-icons/ai'
import logo from "../img/logoTransparent.png"

export default function TopBar(props){

    let onScroll= props.onScroll
    let handleMenu= props.setIsMenuOpen

    return (
        <nav className="top-bar">
            <ul style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderBottom: '1px solid var(--borderGray)',
                gap: '1rem',
                alignItems: 'center',
                padding: '1.5rem .8rem',
            }}>
                <li style={{position: 'absolute', left: '.8rem', display: 'flex', gap: '.3rem'}}>
                    <div className="mail-manu-icon">
                        <MdOutlineMail className="mailIcon"/>
                    </div>
                    <button className="menuContactButton"> Get in touch</button>
                </li>
                <li><button className="linkedInButton menuLinkBtn"> <TiSocialLinkedinCircular className="menu-link-icon"/> </button></li>
                <li><button className="githubMenuButton menuLinkBtn"> <TiSocialGithubCircular className="menu-link-icon" /> </button></li>
                <li><button className="projectsMenuButton menuLinkBtn"> <AiOutlineProject className="menu-link-icon" /> </button></li>
            </ul>
        </nav>

    )
}