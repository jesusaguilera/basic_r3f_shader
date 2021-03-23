import React, { useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import HtmlContent from "./HtmlContent";

import Planes from "./Planes"
import ScrollBar from "./ScrollBar"

// Images
import img_01 from '../assets/images/01_img.jpg';
import img_02 from '../assets/images/02_img.jpg';


const R3f = (props) => {

  const domContent = useRef();

  const images = [img_01, img_02];

  const handlePlaneClick = (index) => {

    let body = document.body;

    if(index === 0) {
      body.style.backgroundColor = "#B1A2A1";
    }else if (index ===  1) {
      body.style.backgroundColor = "#071212";
    }else {
      body.style.backgroundColor = "white";
    }
  }

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
          {/* <HtmlContent domContent={domContent} positionY={0}> */}
          {/*   <div className="o-wrapper"> */}
          {/*     <h1>Hello World</h1> */}
          {/*   </div> */}
          {/* </HtmlContent> */}
          {/* <HtmlContent domContent={domContent} positionY={0}> */}
          {/*   <div className="o-wrapper"> */}
          {/*     <h1>Made in heaven</h1> */}
          {/*   </div> */}
          {/* </HtmlContent> */}
          {/* <HtmlContent domContent={domContent} positionY={0}> */}
          {/*   <div className="o-wrapper"> */}
          {/*     <h1>Rolling stones</h1> */}
          {/*   </div> */}
          {/* </HtmlContent> */}

          {
            [img_01,img_02].map((img, index) => {
              console.log(img)
              return(
                <Planes key={`plane-${index}`} img={img} posY={-index * 120.0} action={() => handlePlaneClick(index)}/>
              )
            })
          }
        </Suspense>
      </Canvas>

      <div className="o-wrapper__root--fixed">
        <div ref={domContent}></div>
      </div>
      <ScrollBar />
    </React.Fragment>
  );
};

export default R3f;
