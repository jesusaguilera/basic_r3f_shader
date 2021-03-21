import React, { useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import HtmlContent from "./HtmlContent";

import Planes from "./Planes"
import ScrollBar from "./ScrollBar"

const R3f = (props) => {

  const domContent = useRef();

  return (
    <React.Fragment>
      <Canvas
        colorManagement
        camera={{
          position: [0, 0, 120],
          fov: 70,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.01,
          far: 1000,
        }}
      >
        <Suspense fallback={null}>
          <Planes smooth={props.smooth}/>
          <HtmlContent domContent={domContent} positionY={0}>
            <div className="o-wrapper">
              <h1>Hello World</h1>
            </div>
          </HtmlContent>
          <HtmlContent domContent={domContent} positionY={0}>
            <div className="o-wrapper">
              <h1>Noemí Flores</h1>
            </div>
          </HtmlContent>
          <HtmlContent domContent={domContent} positionY={0}>
            <div className="o-wrapper">
              <h1>Aguilera Noemí</h1>
            </div>
          </HtmlContent>
        </Suspense>
      </Canvas>

      <div className="o-wrapper__root--fixed">
        <div ref={domContent}></div>
      </div>
      <ScrollBar smooth={props.smooth}/>
    </React.Fragment>
  );
};

export default R3f;
