import { useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {
  useEffect(() => {
    document.title = "Contacto | NG Dynamic";
  }, []);

  return (
    <>
      <section id="contact">
        <h2>Contacto...</h2>
      </section>
    </>
  );
};

export default Contact;
