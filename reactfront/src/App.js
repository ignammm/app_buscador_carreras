import './App.css';
import CompShowInstituciones from './components/Institucion/ShowInstitucion.js';
import CompCreateInstitucion from './components/Institucion/CreateInstitucion.js';
import UpdateInstitucion from './components/Institucion/UpdateInstitucion.js'; 
import CompShowCarreras from './components/Carreras/ShowCarrera.js';
import CompCreateCarrera from './components/Carreras/CreateCarrera.js';
import CompUpdateCarrera from './components/Carreras/UpdateCarrera.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dashboard</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowInstituciones />} />
          <Route path='/crear-institucion' element={<CompCreateInstitucion />} />
          <Route path='/editar-institucion/:id' element={<UpdateInstitucion />} /> 
            
          <Route path="/instituciones/:id_institucion/carreras" element={<CompShowCarreras />} />
          <Route path="/instituciones/:id_institucion/crear-carrera" element={<CompCreateCarrera />} />
          <Route path="/instituciones/:id_institucion/editar-carrera/:id" element={<CompUpdateCarrera />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
