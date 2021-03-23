import React, { useRef, useState, useEffect, useMemo } from "react"
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { Plane } from "@react-three/drei";
import lerp from "lerp";

// Shaders
import fragment from '../assets/shaders/fragment';
import vertex from '../assets/shaders/vertex';

let last = 0;

const Planes = (props) => {

  const [imgTexture] = useLoader(THREE.TextureLoader, [props.img])

  const meshRef = useRef(null)

  const [aspect] = useState(() => new THREE.Vector2(150, 100))

  useEffect(()=>{
    meshRef.current.position.x = 50;
    meshRef.current.position.y = props.posY;
    meshRef.current.rotation.y = -0.032;
    // meshRef.current.rotation.x = 0.025;
    // meshRef.current.rotation.z = -0.1;
  },[])

  const uniforms = useMemo(() => ({
    u_time: { type: "f", value: 0.0 },
    u_tex: { type: "t", value: imgTexture },
    u_bend: { type: "f", value: 0.0 }
  }),[])

  let last = 0;

  useFrame((state, delta) => {
    // update u_time
    uniforms.u_time.value += delta;

    // Plane position
    meshRef.current.position.y = lerp(meshRef.current.position.y, props.posY +  window.scrollY, 0.045);

    // bend
    uniforms.u_bend.value = lerp(uniforms.u_bend.value, (meshRef.current.position.y - last) * 1.5, 0.1)
    last = meshRef.current.position.y
  });

  return (

    <Plane ref={meshRef} onClick={() => props.action()} args={[aspect.x, aspect.y, 20]}>
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
