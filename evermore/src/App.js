import { Routes, Route } from "react-router-dom"
import './App.css';
import LandingPage from './paginas/home'
import Propiedades from './paginas/propiedades'
import RegistroPropiedades from './paginas/registro_propiedades'
import InicioSesion from './paginas/sing_up'

function App() {
  return (
    <div className="App">   
     <Routes>
      <Route path="/" element={ <LandingPage />} />
      <Route path="/propiedades" element={ <Propiedades />} />
      <Route path="/registroPropiedades" element={ <RegistroPropiedades />} />
      <Route path="/registroPersonas" element={ <InicioSesion />} />
      </Routes> 
       
    </div>
  );
}

export default App;
