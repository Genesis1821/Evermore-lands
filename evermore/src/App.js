import './App.css';
import RegistroPropiedades from './paginas/Registro_propiedades/registro_propiedades';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar/navbar';
import Home from './paginas/home/home'
import Propeiedades from './paginas/Propiedades/propiedades'
import InicioSesion from './paginas/Registro_personas/sing_up'

function App() {
  return (
    <div className="App">
   
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/propiedades' element={<Propeiedades />} />
          <Route path='/registro_propiedades' element={<RegistroPropiedades />} />
          <Route path='/registro_personas' element={<InicioSesion />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
