import {ParallaxLayer, Parallax} from "@react-spring/parallax"
import ThreeScene from "./threeComps/ThreeScene";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
    <div className="App">
      <Parallax pages={5}>
        <ParallaxLayer >
          <ThreeScene/>
        </ParallaxLayer>

        <ParallaxLayer>
          <h2>Hello WOrld again</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
    </Suspense>
  );
}

export default App;
