import React, { useRef, useState, useEffect, useMemo } from "react"
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { Plane } from "@react-three/drei";
import lerp from "lerp";

// Shaders
import fragment from '../assets/shaders/fragment';
import vertex from '../assets/shaders/vertex';

// Images
import img_01 from '../assets/images/01_img.jpg';


const Planes = (props) => {

  const [handImg] = useLoader(THREE.TextureLoader, [img_01])
  const meshRef = useRef(null)

  const [aspect] = useState(() => new THREE.Vector2(150, 100))

  const uniforms = useMemo(() => ({
    u_time: { type: "f", value: 0.0 },
    u_tex: { type: "t", value: handImg }
  }),[])


  useFrame((state, delta) => {
    uniforms.u_time.value += delta;
    meshRef.current.position.y = lerp(meshRef.current.position.y, props.smooth, 0.02);;
  });

  return (
    <Plane  ref={meshRef} onClick={() => alert("yes!")} args={[aspect.x, aspect.y, 20]}>
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
