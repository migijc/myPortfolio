
export default function Menu(props){

    return (
        <nav  className="menu-bar">
            <ul>
                <li onClick={()=>props.handleOptionClick(0)}>
                    <button className="menuBtnFirst"> Home </button>
                </li>
                <li onClick={()=>props.handleOptionClick(1)}>
                    <button> About Me </button>
                </li>
                <li onClick={()=>props.handleOptionClick(2)}>
                    <button> Projects</button>
                </li>
                <li onClick={()=>props.handleOptionClick(3)}>
                    <button className="menuBtnLast"> Contact</button>
                </li>
            </ul>
        </nav>
    )
}