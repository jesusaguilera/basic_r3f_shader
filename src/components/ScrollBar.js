// Dependencies
import React, { useEffect, useRef } from "react";

// Hooks
import useWindowSize from "../hooks/useWindowSize";

import state from './section/state';

const Scrollbar = (props) => {

  const windowSize = useWindowSize();

  // Scrollbar ref
  const scrollbar = useRef();

  // Set body height
  useEffect(()=> {
    document.body.style.height = `${windowSize.height * state.sections}px`
  },[windowSize.height])

  // Move scrollbar
  useEffect(()=> {
    scrollbar.current.style.transform = `translate3d(0, -${100 -+ props.smooth}%, 0)`;
  },[props.smooth])

  return (
    <div className="c-scrollbar__wrapper">
      <div className="c-scrollbar" ref={scrollbar}></div>
    </div>
  );
};

export default Scrollbar;
