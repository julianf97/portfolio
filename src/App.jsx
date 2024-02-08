import './App.css'
import { HashRouter as BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MyApp from './components/MyApp/MyApp.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import { OpenNavbarProvider } from './context/OpenNavbarContext.jsx';

function App() {

  return (
  <>
    <BrowserRouter>
      <OpenNavbarProvider>
        <Routes>
          <Route path="/" element={<MyApp/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </OpenNavbarProvider>
    </BrowserRouter>
  </>
  )
}

export default App
