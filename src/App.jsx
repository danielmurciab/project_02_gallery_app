import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bogota1 } from './components/Bogota1';
import { Bogota2 } from './components/Bogota2';
import { Bogota3 } from './components/Bogota3';
import { Bogota4 } from './components/Bogota4';
import { Bogota5 } from './components/Bogota5';
import { Bogota6 } from './components/Bogota6';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bogota1" element={<Bogota1/>} />
          <Route path="/bogota2" element={<Bogota2/>} />
          <Route path="/bogota3" element={<Bogota3/>} />
          <Route path="/bogota4" element={<Bogota4/>} />
          <Route path="/bogota5" element={<Bogota5/>} />
          <Route path="/bogota6" element={<Bogota6/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
