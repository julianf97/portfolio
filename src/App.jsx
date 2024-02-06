import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MyApp from './components/MyApp/MyApp.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyApp/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
