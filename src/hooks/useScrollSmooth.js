import {useState, useEffect} from "react";

// Hooks
import useWindowSize from "./useWindowSize";

const useScrollSmooth = () => {

  const windowSize = useWindowSize();

  let smooth = 0;
  // Get browsers type
  //
  const raq = () => {
    //Calculate totalHeight
    let totalHeight = document.body.scrollHeight - windowSize.height;

    //Set smooth
    smooth = (window.scrollY / totalHeight) * 100;

    //loop
    requestAnimationFrame(raq);

    setSm(smooth)
  };

  // useState
  const [sm, setSm] = useState(null);

  // useEffect
  useEffect(()=> {
    raq();
  }, [])

  return sm;
}

export default useScrollSmooth;
