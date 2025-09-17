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
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Variantes del contenedor principal (stagger)
const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15, when: "beforeChildren" } },
  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
};

// Variantes de cada elemento hijo
const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function AnimatedRoutes() {
  const location = useLocation();

  // Función para envolver cada página
  const wrapPage = (Component, key) => (
    <motion.div
      key={key} // ⚡ clave para que animate entre rubros
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
        <Component />
      </motion.div>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={wrapPage(Hero, "home")} />
        <Route path="/nosotros" element={wrapPage(About, "about")} />
        <Route path="/contacto" element={wrapPage(Contact, "contact")} />
        <Route path="/rubros/:id" element={wrapPage(Rubro, location.pathname)} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Scroll />
      <ScrollToTopButton />
      <div className="app">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
