import './App.css';
import CompShowInstituciones from './components/Institucion/ShowInstitucion.js';
import CompCreateInstitucion from './components/Institucion/CreateInstitucion.js';
import UpdateInstitucion from './components/Institucion/UpdateInstitucion.js'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gestión de Instituciones</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowInstituciones />} />
          <Route path='/crear-institucion' element={<CompCreateInstitucion />} />
          <Route path='/editar-institucion/:id' element={<UpdateInstitucion />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
