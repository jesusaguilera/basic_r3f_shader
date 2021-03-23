// Dependencies
import React, { useEffect, useState, useRef } from "react";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

import state from "./section/state";

const Scrollbar = (props) => {
  const windowSize = useWindowSize();

  // Scrollbar ref
  const scrollbarRef = useRef();

  const raq = () => {
    document.body.style.height = `${windowSize.height * state.sections}px`;

    //Calculate totalHeight
    let totalHeight = document.body.scrollHeight - windowSize.height;

    //Set smooth
    let smooth = (window.scrollY / totalHeight) * 100;

    //loop
    scrollbarRef.current.style.transform = `translate3d(0, -${ 100 - +smooth }%, 0)`;

    requestAnimationFrame(raq);
  };

  useEffect(() => raq(), []);

  // Set body height
  useEffect(() => {
    document.body.style.height = `${windowSize.height * state.sections}px`;
  }, [windowSize.height]);

  return (
    <div className="c-scrollbar__wrapper">
      <div className="c-scrollbar" ref={scrollbarRef}></div>
    </div>
  );
};

export default Scrollbar;
