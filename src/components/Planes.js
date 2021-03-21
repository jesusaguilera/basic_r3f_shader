import React, { useRef, useState, useEffect, useMemo } from "react"
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { Plane } from "@react-three/drei";
// import lerp from "lerp";

// Shaders
import fragment from '../assets/shaders/fragment';
import vertex from '../assets/shaders/vertex';

// Images
import img_01 from '../assets/images/01_img.jpg';

let last = 0;

const lerp = (a, b, t) => {
  return ((1 - t) * a + t * b);
}

const Planes = (props) => {

  const [handImg] = useLoader(THREE.TextureLoader, [img_01])
  const meshRef = useRef(null)

  const [aspect] = useState(() => new THREE.Vector2(150, 100))
  const [wheelDeltaY, setWheelDeltaY] = useState(0)

  useEffect(()=>{
    meshRef.current.position.x = 75;
  },[])

  const uniforms = useMemo(() => ({
    u_time: { type: "f", value: 0.0 },
    u_tex: { type: "t", value: handImg },
    u_bend: { type: "f", value: 0.0 }
  }),[])


  useFrame((state, delta) => {
    window.addEventListener("wheel", (e) => setWheelDeltaY(e.deltaY))
    uniforms.u_time.value += delta;
    uniforms.u_bend.value = lerp(uniforms.u_bend.value, window.scrollY - meshRef.current.position.y, 0.14);
    meshRef.current.position.y = lerp(meshRef.current.position.y, window.scrollY , 0.13);
  });

  return (
    <Plane ref={meshRef} onClick={() => alert("yes!")} args={[aspect.x, aspect.y, 20]}>
      <shaderMaterial
        side={THREE.DoubleSide}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </Plane>
  );
};

export default Planes;
