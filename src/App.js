import { ParallaxLayer, Parallax } from "@react-spring/parallax"
import { Suspense, useEffect, useRef, useState } from "react";
import TopBar from "./components/TopBar";
import PageIntro from "./components/PageIntro";
import Skills from "./components/Skills";
import FocusArea from "./components/FocusArea";
import PageOutro from "./components/PageOutro";
import Footer from "./components/Footer";


function App() {
  let parallaxRef = useRef(null)
  // const [load, setLoad] = useState(false)
  // const [isScreenOver1200, setIsScreenOver1200] = useState(true)
  // const [currentPageNum, setCurrentPageNum] = useState(0)

  // let windowObserver = new ResizeObserver(() => {
  //   if(parallaxRef.current){
  //     parallaxRef.current.scrollTo(currentPageNum)
  //   }
  //   if (window.innerWidth < 1200) {
  //     return setIsScreenOver1200(false)
  //   }
  //   setIsScreenOver1200(true)
  // })

  // async function delayFive() {
  //   setTimeout(() => {
  //     setLoad(true)
  //   }, 3000)
  // }

  // useEffect(() => {
  //   delayFive()
  // }, [])



  // useEffect(() => {
    // windowObserver.observe(document.body)
  // },[])

  // function handlePageRedirection(page) {
  //   setCurrentPageNum(page)
  //   parallaxRef.current.scrollTo(page)
  // }




  // function handleMenuClick(pageNum) {
  //   parallaxRef.current.scrollTo(pageNum)
  // }



    return (
      <div className="App">
        <TopBar/>
        <PageIntro />
        <Skills />
        <FocusArea/>
        <PageOutro/>
        <Footer />
      </div>
      // <Suspense fallback={<LoadingScreen/>}>
      //  
      //     <MenuBar isScreenOver1200={isScreenOver1200} onScroll={handlePageRedirection} />
      //     <Parallax pages={4} className="parallax-container" ref={parallaxRef}>
      //       <ParallaxLayer speed={1} className="parallax-layer">
      //         <Home scrollTo={() => handleMenuClick(3)} isScreenOver1200={isScreenOver1200} />
      //       </ParallaxLayer>
      //       <ParallaxLayer offset={1} speed={1} className="parallax-layer" >
      //         <AboutMe />
      //       </ParallaxLayer>
      //       <ParallaxLayer offset={2} speed={1} className="parallax-layer">
      //         <Projects isScreenOver1200={isScreenOver1200} />
      //       </ParallaxLayer>
      //       <ParallaxLayer offset={3} speed={1} className="parallax-layer">
      //         <ContactMe />
      //       </ParallaxLayer>
      //     </Parallax>
      //   </div>
      // </Suspense>
    );
}

export default App;
