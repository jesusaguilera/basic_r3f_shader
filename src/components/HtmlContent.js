import React, { useState, useEffect } from "react"
import { Html, Plane, meshBasicMaterial } from "@react-three/drei";

const HtmlContent = () => {
  return (
    <Html fullscreen>
        <div className="o-wrapper">
          <h1>Hello World</h1>
        </div>
    </Html>
  );
};

export default HtmlContent;
