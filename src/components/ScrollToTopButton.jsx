import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/scrollButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    setVisible(window.scrollY > 300);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
      aria-hidden={!visible}
    >
      <i className="bi bi-caret-up-fill" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTopButton;
