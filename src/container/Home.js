import React, { useState, useEffect, Suspense } from 'react';
import R3f from '../components/R3f';

// Hooks
import useWindowSize from "../hooks/useWindowSize";


const Home = () => {

  const windowSize = useWindowSize();
  const [smooth, setSmooth] = useState(0);

  const raq = () => {
    //Calculate totalHeight
    let totalHeight = document.body.scrollHeight - windowSize.height;
    //Set smooth
    setSmooth((window.scrollY / totalHeight) * 100);
    //loop
    requestAnimationFrame(raq);
  };

  // Set class to #root
  useEffect(() => {
    let root = document.getElementById("root");
    root.classList.add("o-wrapper--fixed");
    raq();
  }, []);


  return (
    <React.Fragment>
      <Suspense fallback={"Cargando..."}>
        <R3f smooth={smooth}/>
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
