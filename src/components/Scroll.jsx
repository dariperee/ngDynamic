import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // sin animación, directo al top
  }, [pathname]); // se dispara cada vez que cambia la ruta

  return null;
};

export default Scroll;
