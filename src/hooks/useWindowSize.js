import {useEffect} from "react";

const useWindowSize = () => {


  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const windowSize = getSize();

  // Set new size to windowSize
  const handleResize = () => {
    windowSize.width = getSize().width;
    windowSize.height = getSize().height;
  }

  useEffect(()=> {
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize;
}

export default useWindowSize;
