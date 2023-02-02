import Menu from "./Menu"
import logo from "../img/logoTransparent.png"

export default function TopBar(props){

    let onScroll= props.onScroll
    let handleMenu= props.setIsMenuOpen

    return (
        <div className="top-bar">
            <img src={logo} className="logo"/>
            <Menu onScroll={onScroll} setIsMenuOpen={handleMenu}/>
        </div>

    )
}