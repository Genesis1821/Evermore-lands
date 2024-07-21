import { Routes, Route } from "react-router-dom"
import './App.css';
import RegistroPropiedades from './paginas/Registro_propiedades/registro_propiedades';
import Home from './paginas/home/home'
import Propeiedades from './paginas/Propiedades/propiedades'
import InicioSesion from './paginas/Registro_personas/sing_up'

function App() {
  return (
    <div className="App">   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/propiedades' element={<Propeiedades />} />
          <Route path='/registro_propiedades' element={<RegistroPropiedades />} />
          <Route path='/registro_personas' element={<InicioSesion />} />
        </Routes>
    </div>
  );
}

export default App;
