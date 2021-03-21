import React, { useEffect, Suspense } from "react"
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { Section } from './section/Section';

const HtmlContent = (props) => {

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, props.positionY, 0]}>
        <Html fullscreen portal={props.domContent}>
          {props.children}
        </Html>
      </group>
    </Section>
  );

};

export default HtmlContent;
