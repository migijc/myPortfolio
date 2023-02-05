import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import { Suspense, useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar"
import ContactMe from "./components/ContactMe";
import LoadingScreen from "./components/LoadingScreen";
import MenuBar from "./components/MenuBar";
import {IoMenuOutline} from "react-icons/io5"


function App() {
  let parallaxRef = useRef(null)
  const [load, setLoad] = useState(false)
  const [isScreenOver1200, setIsScreenOver1200] = useState(true)
  const [currentPageNum, setCurrentPageNum] = useState(0)

  console.log(currentPageNum)

  let windowObserver = new ResizeObserver(() => {
    if(parallaxRef.current){
      parallaxRef.current.scrollTo(currentPageNum)
    }
    if (window.innerWidth < 1200) {
      return setIsScreenOver1200(false)
    }
    setIsScreenOver1200(true)
  })

  async function delayFive() {
    setTimeout(() => {
      setLoad(true)
    }, 3000)
  }

  useEffect(() => {
    delayFive()
  }, [])



  // useEffect(() => {
    windowObserver.observe(document.body)
  // },[])

  function handlePageRedirection(page) {
    setCurrentPageNum(page)
    parallaxRef.current.scrollTo(page)
  }




  function handleMenuClick(pageNum) {
    parallaxRef.current.scrollTo(pageNum)
  }



  if (load) {
    return (
      <Suspense fallback={<LoadingScreen/>}>
        <div className="App">
          <MenuBar isScreenOver1200={isScreenOver1200} onScroll={handlePageRedirection} />
          <Parallax pages={4} className="parallax-container" ref={parallaxRef}>
            <ParallaxLayer speed={1} className="parallax-layer">
              <Home scrollTo={() => handleMenuClick(3)} isScreenOver1200={isScreenOver1200} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} className="parallax-layer" >
              <AboutMe />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} className="parallax-layer">
              <Projects isScreenOver1200={isScreenOver1200} />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={1} className="parallax-layer">
              <ContactMe />
            </ParallaxLayer>
          </Parallax>
        </div>
      </Suspense>
    );
  } else {
    return (
      <LoadingScreen />
    )
  }
}

function PageDecorationHeader() {
  return (
    <div className="html-decoration decoration-header">
      <p className="deco-html">{"<html>"}</p>
      <p className="deco-body">{"<body>"}</p>
    </div>
  )
}

function PageDecorationFooter() {
  return (
    <div className="html-decoration decoration-footer">
      <p className="deco-body">{"<body/>"}</p>
      <p className="deco-html">{"<html/>"}</p>
    </div>
  )
}

export default App;
