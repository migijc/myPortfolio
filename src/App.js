import {ParallaxLayer, Parallax} from "@react-spring/parallax"
import ThreeScene from "./threeComps/ThreeScene";
import { Suspense } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <Suspense>
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer speed={0.1}>
          <Home/>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3}  className="parralax-page">
          <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer offset={2} style={{backgroundColor: "var(--almost-black)", color: "white"}} speed={0.3}>
            <Projects/>
        </ParallaxLayer>
      </Parallax>
    </div>
    </Suspense>
  );
}

export default App;
