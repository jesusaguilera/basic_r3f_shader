import React, { useState, useEffect, Suspense } from 'react';
import R3f from '../components/R3f';

const Home = () => {

  // Set class to #root
  useEffect(() => {
    let root = document.getElementById("root");
    root.classList.add("o-wrapper--fixed");
  }, []);


  return (
    <React.Fragment>
      <Suspense fallback={"Cargando..."}>
        <R3f />
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
