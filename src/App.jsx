import './styles/App.css'

// Componentes
import Hero from './components/Hero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

// Rubros
import Logistica from './components/Rubros/Logistica'
import Mantenimiento from './components/Rubros/Mantenimiento'
import Consultoria from './components/Rubros/Consultoria'
import NutricionAnimal from './components/Rubros/NutricionAnimal'
import Agroexp from './components/Rubros/Agroexp'

// Módulos
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
          <main>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/nosotros" element={<About/>}/>
                <Route path="/contacto" element={<Contact/>}/>

                <Route path="/logistica" element={<Logistica/>}/>
                <Route path="/mantenimiento" element={<Mantenimiento/>}/>
                <Route path="/consultoria" element={<Consultoria/>}/>
                <Route path="/nutricion" element={<NutricionAnimal/>}/>
                <Route path="/agroexportacion" element={<Agroexp/>}/>
                
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

