import './App.css'
import { HashRouter as BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';
import { LenguajeProvider } from './context/LenguajeContext.jsx';
import PageProyect from './pages/PageProyect/PageProyects.jsx';
import About from './pages/About/About.jsx';
import ProyectDetail from './pages/ProyectDetail/ProyectDetail/ProyectDetail.jsx';




function App() {

  return (
  <>
    <BrowserRouter>
      <OpenNavbarProvider>
        <LenguajeProvider>
          <Routes>
          <Route path="/" element={<Portfolio/>} />
              <Route path="/proyects" element={<PageProyect/>} />
              <Route path="/proyects/:id" element={<ProyectDetail/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/*" element={<Navigate to="/" replace/>} />
          </Routes>
        </LenguajeProvider>
      </OpenNavbarProvider>
    </BrowserRouter>
  </>
  )
}

export default App
