import {ParallaxLayer, Parallax} from "@react-spring/parallax"
import { Suspense, useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar"
import ContactMe from "./components/ContactMe";
import LoadingScreen from "./components/LoadingScreen";




function App() {
  let parallaxRef = useRef()
  const [load, setLoad] = useState(null)

  async function delayFive(){
    setTimeout(()=>{
      setLoad(true)
    }, 3000)
  }

  useEffect(()=>{
    delayFive()
  }, [])


  
  function handleMenuClick(pageNum){
    parallaxRef.current.scrollTo(pageNum)
  }



  if(load){
    return (
      <Suspense>
      <div className="App">
        <SideBar handleClick={handleMenuClick}/>
        <div className="main-page">
          <Parallax pages={4} className="parallaxCon" style={{width:"90vw"}} ref={parallaxRef}>
            <ParallaxLayer speed={1.2}>
                <PageDecorationHeader/>
                <Home scrollTo={()=>handleMenuClick(3)}/>
                <PageDecorationFooter/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={2}  >
              <div className="parallax-page-container">
                <PageDecorationHeader/>
                <AboutMe/>
                <PageDecorationFooter/>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} style={{backgroundColor: "var(--almost-black)", color: "white"}} speed={1}>
              <div className="parallax-page-container">
                <PageDecorationHeader/>
                <Projects/>
                <PageDecorationFooter/>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1}>
              <div className="parallax-page-container">
                  <PageDecorationHeader/>
                  <ContactMe/>
                  <PageDecorationFooter/>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>
      </Suspense>
    );
  }else{
    return (
      <LoadingScreen/>
    )
  }
  

}

function PageDecorationHeader(){
  return (
    <div className="html-decoration decoration-header">
      <p className="deco-html">{"<html>"}</p>
      <p className="deco-body">{"<body>"}</p>
    </div>
  )
}

function PageDecorationFooter(){
  return (
    <div className="html-decoration decoration-footer">
      <p className="deco-body">{"<body/>"}</p>
      <p className="deco-html">{"<html/>"}</p>
    </div>
  )
}



export default App;
