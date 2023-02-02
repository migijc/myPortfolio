
export default function Menu(props){

    function handleMenu(page){
        props.setIsMenuOpen(false)
        props.onScroll(page)
    }

    return (
        <nav  className="menu-bar">
            <ul>
                <li onClick={()=>handleMenu(0)}>
                    <button className="menu-btn menu-btn-first "> Home </button>
                </li>
                <li onClick={()=>handleMenu(1)}>
                    <button className="menu-btn"> About Me </button>
                </li>
                <li onClick={()=>handleMenu(2)}>
                    <button className="menu-btn"> Projects</button>
                </li>
                <li onClick={()=>handleMenu(3)}>
                    <button className="menu-btn menu-btn-last"> Contact</button>
                </li>
            </ul>
        </nav>
    )
}