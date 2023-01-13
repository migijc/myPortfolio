import logo from "../img/logoTransparent.png"

export default function LoadingScreen(){

    return (
    <div className="loading-page">
        <img className="loading-logo" src={logo}/>
        <p>Loading portfolio...</p>
    </div>
    )
}