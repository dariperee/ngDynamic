import "./styles/App.css";

// Componentes
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Scroll from "./components/Scroll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Rubro from "./components/Rubro";

// Módulos
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Scroll />
      <ScrollToTopButton />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/rubros/:id" element={<Rubro />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
