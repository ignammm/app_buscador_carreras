import React from 'react';
import { useFetch } from '../useFetch.js';
import { Link } from 'react-router-dom';
import { useDelete } from '../useDelete.js';

const URI = 'http://localhost:8000/instituciones';

const CompShowInstituciones = () => {
  const { data: instituciones, loading, error } = useFetch(URI);
  const deleteInstitucion = useDelete(URI); 

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;  

  return (
    <div>
      <h1>Lista de Instituciones</h1>
      <Link to="/crear-institucion">
        <button>Nueva Institución</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Correo</th>
            <th>Página</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {instituciones && instituciones.map(institucion => (
            <tr key={institucion.id}>
              <td>{institucion.nombre}</td>
              <td>{institucion.direccion}</td>
              <td>{institucion.correo}</td>
              <td>{institucion.pagina}</td>
              <td>{institucion.telefono}</td>
              <td>
                <button onClick={() => deleteInstitucion(institucion.id)}>Eliminar</button>
                <Link to={`/editar-institucion/${institucion.id}`}>
                  <button>Editar</button>
                </Link>
                <Link to={`/instituciones/${institucion.id}/carreras`}>
                  <button>Carreras</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompShowInstituciones;
