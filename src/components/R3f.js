import React, { useEffect } from "react"
import { Canvas } from "react-three-fiber";
import HtmlContent from "./HtmlContent";
import { Plane } from "@react-three/drei";

// Shaders
import fragment from '../assets/shaders/fragment';
import vertex from '../assets/shaders/vertex';


const R3f = () => {

  let time = 0;
  const uniforms = {
    u_time: { type: "f", value: 0.0 },
  };

  const raq = () => {
    time += 0.05;
    uniforms.u_time.value = time;
    requestAnimationFrame(raq)
  }

  useEffect(()=> {
    raq();
  }, [])

  return (
    <Canvas
      colorManagement
      camera={{
        position: [0, 0, 2],
        fov: 70,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.01,
        far: 1000,
      }}
    >
      <Plane onClick={() => alert("yes!")} args={[1.5, 1, 20]}>
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertex}
          fragmentShader={fragment}
        />
      </Plane>

      <HtmlContent />
    </Canvas>
  );
};

export default R3f;
