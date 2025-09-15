import { useEffect } from "react";

const Scroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // va directo al top
  }, []);

  return null;
};

export default Scroll;
