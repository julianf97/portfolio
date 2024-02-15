import './App.css'
import { HashRouter as BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Portfolio from './components/Portfolio/Portfolio.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';
import { LenguajeProvider } from './context/LenguajeContext.jsx';
import Proyects from '../src/pages/PageProyects.jsx';

function App() {

  return (
  <>
    <BrowserRouter>
      <OpenNavbarProvider>
        <LenguajeProvider>
          <Routes>
            <Route path="/" element={<Portfolio/>} />
            <Route path="/*" element={<Navigate to="/" replace />} />
            <Route path="/proyects" element={<Proyects/>} />
          </Routes>
        </LenguajeProvider>
      </OpenNavbarProvider>
    </BrowserRouter>
  </>
  )
}

export default App
