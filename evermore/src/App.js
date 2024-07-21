import { Routes, Route } from "react-router-dom"
import './App.css';
import LandingPage from './paginas/home'
import Propiedades from './paginas/propiedades'
import RegistroPropiedades from './paginas/registro_propiedades'
import Comentario from './paginas/sing_up'

function App() {
  return (
    <div className="App">   
     <Routes>
      <Route path="/home" element={ <LandingPage />} />
      <Route path="/propiedades" element={ <Propiedades />} />
      <Route path="/registroPropiedades" element={ <RegistroPropiedades />} />
      <Route path="/registroPersonas" element={ <Comentario />} />
      </Routes> 
       
    </div>
  );
}

export default App;
